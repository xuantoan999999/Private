import { Http } from '@angular/http';
import { HttpService } from './../http.service';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class AuthService extends HttpService{
  private showSidebarMethodCallSource = new Subject<any>();
  showSidebarCalled$ = this.showSidebarMethodCallSource.asObservable();

  private hideSidebarMethodCallSource = new Subject<any>();
  hideSidebarCalled$ = this.hideSidebarMethodCallSource.asObservable();

  constructor(http: Http) {
    super(http, 'auth/check-login');
  }
  getUserLogin() {
    let token = localStorage['Personal_userInfo'];
    let data = {
      token
    }
    return this.post(data);
  }

  showSidebar(){
    this.showSidebarMethodCallSource.next();
  }

  hideSidebar(){
    this.hideSidebarMethodCallSource.next();
  }
}
