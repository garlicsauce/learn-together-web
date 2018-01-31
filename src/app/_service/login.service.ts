import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LoginService {

  constructor(private http: HttpClient) {
  }

  public login(username: string, password: string) {
    return this.http.post('login', {username: username, password: password});
  }

  public logout() {
    localStorage.removeItem('jwtToken');
  }
}
