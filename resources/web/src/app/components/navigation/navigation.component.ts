import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  listMenu = [
    this.initMenuSidebar('dashboard', 'Dashboard', {
      icon: 'dashboard',
    }),
    this.initMenuSidebar('dang-nhap', 'Login', {
      icon: 'dashboard',
    }),
  ]
  constructor() {
  }

  ngOnInit() {
  }

  initMenuSidebar(route, title, extra) {
    return { route, title, extra };
  }
}
