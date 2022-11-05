import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-indevelopment',
  templateUrl: './indevelopment.component.html',
  styleUrls: ['./indevelopment.component.css']
})
export class IndevelopmentComponent implements OnInit {
  title="We are sorry! This page is under construction."

  constructor() { }

  ngOnInit(): void {
  }

}
