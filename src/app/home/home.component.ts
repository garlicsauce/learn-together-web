import { Component, OnInit } from '@angular/core';

import { LoginService } from '../_service';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  templateUrl: 'home.component.html'
})
export class HomeComponent implements OnInit {

  token: string;

  constructor(private router: Router, private loginService: LoginService) {}

  ngOnInit(): void {
    this.token = localStorage.getItem('jwtToken');
  }

  logout(): void {
    this.loginService.logout();
    console.log('Logging out');
    this.router.navigate(['/']);
  }
}
