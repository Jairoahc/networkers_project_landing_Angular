import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-que-es-net',
  templateUrl: './que-es-net.component.html',
  styleUrls: ['./que-es-net.component.css']
})
export class QueEsNetComponent implements OnInit {
  descriptionb1 ="Networkers es una plataforma que conecta empresas con personas independientes que buscan ofrecer sus habilidades como servicios. La plataforma permite a las personas registrarse y establecer en su perfil sus habilidades, y el valor por sus servicios, asi mismo como las empresas pueden publicar sus proyectos o vacantes destinadas a personas con ciertas habilidades y ofreciendo una paga correspondiente a lo que los negocios consideren adecuado. "
  card1description="Networkers facilita la conexión entre negocios y personas, al proveer facilidades tales como pagos digitales y establecidos en las fechas escogidas por ambas partes, dando asi seguridad a los usuarios."
  card2description="En Networkers cualquier persona con cualquier tipo de habilidad puede registrarse y encontrar diferentes compañías con quien conectar."

  constructor() { }

  ngOnInit(): void {
  }

}
