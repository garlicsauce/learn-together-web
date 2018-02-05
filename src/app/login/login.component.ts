import { Component } from '@angular/core';
import { LoginService } from '../_service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {

  username: string;
  password: string;

  constructor(private router: Router, private loginService: LoginService) { }

  login() {
    if (this.username && this.password) {
      this.loginService.login(this.username, this.password).subscribe(() => {
        this.router.navigate(['/home']);
      })
    }
  }

}
