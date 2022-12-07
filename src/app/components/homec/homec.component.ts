import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services/services.service';
import { NgForm } from '@angular/forms';
import { Services } from 'src/app/models/services.model';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { async, resetFakeAsyncZone } from '@angular/core/testing';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-homec',
  templateUrl: './homec.component.html',
  styleUrls: ['./homec.component.css']
})
export class HomecComponent implements OnInit {

  constructor( public servicesService: ServicesService, public router: Router, public userservice: UserService) { }

  ngOnInit(): void {
    this.getServices();
  
  }

  getServices() {
    let response = this.servicesService.getServices();

    response.subscribe((res: any) => {
      this.servicesService.services = res; //[{}{}{}{}] arreglo de productos
      console.log(this.servicesService.services)
    });
  }

  createService(form: NgForm) {
    //{datos del formulario}

    if(form.value._id){
      this.updateServices(form.value)
      return 
    }

    delete form.value._id //elimina el _id null

    let { title, description, price } = form.value;

    if (!title || !description || !price)
    /* return alert('Diligencie por favor todos los campos') */
    {
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Diligencie al menos titulo, precio y descripción ',
        showConfirmButton: false,
        timer: 3000
      })
      return

    } ;

    this.servicesService.createServices(form.value).subscribe((res: any) => {
      this.getServices();
      /* alert(res.msg) */;
      {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Su servicio ha sido creado correctamente y podra ser visualizado en el home',
          showConfirmButton: false,
          timer: 3000
        })
        form.reset()


      }
      this.servicesService.currentServices = new Services()
    });
  }

  updateServices(data: Services){

    this.servicesService.updateServices(data._id, data).subscribe((res) => {
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Producto Actualizado',
        showConfirmButton: false,
        timer: 1000
      })
      this.getServices()
      this.servicesService.currentServices = new Services()
    })

  }

  fillForm(services: Services){
    this.servicesService.services = Services
  }

}
