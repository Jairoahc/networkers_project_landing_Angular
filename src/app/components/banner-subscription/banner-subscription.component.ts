import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner-subscription',
  templateUrl: './banner-subscription.component.html',
  styleUrls: ['./banner-subscription.component.css']
})
export class BannerSubscriptionComponent implements OnInit {
  titulobanner = "¡Suscribete a nuestro Newsletter y recibe mas información!"
  btntext= "Suscribirse"

  constructor() { }

  ngOnInit(): void {
  }

}
