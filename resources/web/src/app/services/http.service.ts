import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class HttpService {
  host: string = 'http://localhost:2201';

  constructor(private http: Http) { }

  get(url) {
    return this.http.get(`http://localhost:2201/${url}`).map(response => response.json());
  }

  post(url, data){
    return this.http.post(`http://localhost:2201/${url}`,data).map(response => response.json());
  }

  convertUrl() {

  }

}
