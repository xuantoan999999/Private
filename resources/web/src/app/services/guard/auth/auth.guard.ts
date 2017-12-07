import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../../auth/auth.service';
import { AppComponent } from '../../../app.component';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private authService: AuthService, private appComponent: AppComponent) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.authService.getUserLogin().map(resp => {
      if (resp.user) {
        this.authService.showSidebar();
        return true;
      }
      this.router.navigate(['dang-nhap']);
      return false;
    })
  }
}
