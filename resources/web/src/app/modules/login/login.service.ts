import { HttpService } from './../../services/http.service';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class LoginService extends HttpService {

  constructor(http: Http) {
    super(http);
  }
  login(username: string, password: string) {
    let data = {
      username,
      password
    }
    return data;
  }
}
