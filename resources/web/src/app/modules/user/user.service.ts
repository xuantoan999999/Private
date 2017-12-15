import { HttpService } from './../../services/http.service';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class UserService extends HttpService {
  method: string = 'nguoi-dung';
  private allRoles = [
    { name: 'Admin', value: 'admin' },
    { name: 'User', value: 'user' },
    { name: 'Super Admin', value: 'supper_admin' }
  ];
  constructor(http: Http) {
    super(http, 'api/nguoi-dung');
  }
}
