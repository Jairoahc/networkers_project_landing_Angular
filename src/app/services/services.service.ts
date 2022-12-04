import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Services } from '../models/services.model';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  URL_API = "http://localhost:5000/services"
  services: any //listar los productos
  currentServices: Services //crear - actualizar - eliminar el formulario
  shoppingCart: any

  constructor(public http: HttpClient) {
    this.currentServices = new Services()
   }

   getServices(){
    return this.http.get(`${this.URL_API}/get-services `)
  }

  createServices(data: any){
    return this.http.post(`${this.URL_API}/create-services`, data)
  }

  deleteServices(id: string){
    return this.http.delete(`${this.URL_API}/delete-services?id=${id}`)
  }

  updateServices(id: string, data: any){
    return this.http.put(`${this.URL_API}/update-services?id=${id}`, data)
  }
}

