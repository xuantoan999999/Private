import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class HttpService {

  constructor(private http: Http) { }

  get() {
    return this.http.get('http://localhost:2201/test-api')
      .map(response => response.json());
  }

}
