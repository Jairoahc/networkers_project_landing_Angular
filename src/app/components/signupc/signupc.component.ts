import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user.model';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-signupc',
  templateUrl: './signupc.component.html',
  styleUrls: ['./signupc.component.css']
})
export class SignupcComponent implements OnInit {

  constructor(public userService: UserService) { }

  ngOnInit(): void {
  }
  signup (form: NgForm){
    let {name, lastName, email, password, age, city, country, occupation,  confirmPassword} = form.value
    //console.log(form.value)
    if (!name || !lastName || !email || !password || !confirmPassword || !age || !city || !country || !confirmPassword || !occupation){
      Swal.fire({
        position: 'center',
        icon: 'error',
        text: 'Debes llenar todos los campos',
        showConfirmButton: true,
      })

      return 
    }

    if(password !== confirmPassword){
     
      Swal.fire({
        position: 'center',
        icon: 'error',
        text: 'Las contraseñas no coinciden',
        showConfirmButton: true,
      })

      return 
      
    }

    delete form.value.confirmPassword
    
    this.userService.signUp(form.value).subscribe(
      (res) => {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'El usuario ha sido creado correctamente',
          showConfirmButton: false,
          timer: 1500
        })

        //navigate nos lleva al login
      },
      (err) => {
        Swal.fire(
          'Error!',
          `${err.error.msg || "Ha ocurrido un error"}`,
          'error'
        )
      }
    )
      this.userService.currentUser=new User()
      form.resetForm()
  }

  }

