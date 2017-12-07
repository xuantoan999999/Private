import { Component } from '@angular/core';
import { AuthService } from './services/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'Testtt';
  hideSidebar: boolean = true;
  constructor(authService: AuthService) {
    const $this = this;
    authService.showSidebarCalled$.subscribe(() => { $this.showSidebarFunc(); })
    authService.hideSidebarCalled$.subscribe(() => { $this.hideSidebarFunc(); })
  }

  showSidebarFunc() {
    this.hideSidebar = false;
  }

  hideSidebarFunc(){
    this.hideSidebar = true;
  }
}
