import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2'
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginc',
  templateUrl: './loginc.component.html',
  styleUrls: ['./loginc.component.css']
})
export class LogincComponent implements OnInit {

  constructor(public userService: UserService, public router: Router) { }

  ngOnInit(): void {
  }

  login(form: NgForm){

    let {email, password} = form.value
    console.log(form.value)
    if(!email || !password){        {
     
      Swal.fire({
        position: 'center',
        icon: 'error',
        text: 'Por favor diligencie todos los campos',
        showConfirmButton: true,
      })
  }
      
      /* alert("Diligencie todos los campos") */
      return
      console.log(form.value)
    }

    this.userService.login(email, password).subscribe(
      (res: any) =>
        {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Bienvenido a Networkers',
            showConfirmButton: false,
            timer: 2000
          })
        /* alert("Usuario logueado correctamente") */
        //localStorage.setItem('llave', valor)
        localStorage.setItem("token", res.token)
        this.router.navigate(['/home'])

        // proteger las vistar contra los usuarios que no esten logueados
        //mostrar los datos en la barra de navegación
      },
      (err) => 
        {
     
          Swal.fire({
            position: 'center',
            icon: 'error',
            text: 'El nombre de usuario o la contraseña es incorrecto',
            showConfirmButton: true,
          })
      }
    )

  }

}

