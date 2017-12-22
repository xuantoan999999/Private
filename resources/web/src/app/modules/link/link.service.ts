import { Injectable } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { Http } from '@angular/http';

@Injectable()
export class LinkService extends HttpService {

  constructor(http: Http) {
    super(http, 'api/website');
 }

}
