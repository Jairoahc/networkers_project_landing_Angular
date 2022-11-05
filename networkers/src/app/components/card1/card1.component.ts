import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card1',
  templateUrl: './card1.component.html',
  styleUrls: ['./card1.component.css']
})
export class Card1Component implements OnInit {
 description1="Empresas no pagan hasta no contratar";
 description2= "Profesionales o expertos pueden encontrar trabajos para cada etapa de su carrera";
 description3= "Publica un empleo o encuentra a la persona indicada buscando talento por categoria"

  constructor() { }

  ngOnInit(): void {
  }

}
