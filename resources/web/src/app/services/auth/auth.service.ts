import { Http } from '@angular/http';
import { HttpService } from './../http.service';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService extends HttpService{

  constructor(http: Http) {
    super(http);
  }
  getUserLogin() {
    let token = localStorage['Personal_userInfo'];
    let data = {
      token
    }
    return this.post('auth/check-login',data);
  }
}
