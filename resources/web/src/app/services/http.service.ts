import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class HttpService {
  host: string = 'http://localhost:2201';
  url: string;

  constructor(private http: Http, url = 'auth/check-login') {
    this.url = url;
  }

  get() {
    return this.http.get(`http://localhost:2201/${this.url}`).map(response => response.json());
  }

  post(data) {
    return this.http.post(`http://localhost:2201/${this.url}`, data).map(response => response.json());
  }

  convertUrl() {

  }

}
