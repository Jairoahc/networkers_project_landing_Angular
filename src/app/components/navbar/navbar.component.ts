import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services/services.service';
import { NgForm} from '@angular/forms';
import { Services } from 'src/app/models/services.model';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { async, resetFakeAsyncZone } from '@angular/core/testing';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor( public servicesService: ServicesService, public router: Router, public userservice: UserService) { }

  ngOnInit(): void {
  }
  logOut() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
    return;
  }

  isLoggedIn() {
    let token = localStorage.getItem('token') || false;

    if (token) {
      return true;
    }

    return false;
  }

}
