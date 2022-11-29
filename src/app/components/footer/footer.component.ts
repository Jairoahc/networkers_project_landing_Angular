import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  title = "NetWorkers"
  description = "Somos una compañía que conecta a las personas, no somos una bolsa de empleo, no somos empleadores y no tenemos relación contractual con los usuarios que se registran en este dominio NetWorkers Inc."
  btntext = "Click Here"
  description2 = "feedback about our processes"
  constructor() { }

  ngOnInit(): void {
  }

}
