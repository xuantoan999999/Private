import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpService } from '../../services/http.service';

@Injectable()
export class AccountService extends HttpService{

  constructor(http: Http) {
    super(http, 'api/tai-khoan');
  }

}
