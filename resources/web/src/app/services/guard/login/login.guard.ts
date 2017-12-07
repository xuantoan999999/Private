import { AppComponent } from './../../../app.component';
import { AuthService } from './../../auth/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { CanDeactivate } from '@angular/router/src/interfaces';

@Injectable()
export class LoginGuard implements CanActivate {
  constructor(private router: Router, private authService: AuthService, private appComponent: AppComponent) {
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    // console.log(next, state);
    return this.authService.getUserLogin().map(resp => {
      if (resp.user) return true;
      this.appComponent.showSideBar();
      this.router.navigate(['dang-nhap']);
      return false;
    })
  }
}
