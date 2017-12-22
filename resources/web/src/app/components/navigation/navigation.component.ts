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
    this.initMenuSidebar('nguoi-dung', 'User', {
      icon: 'supervisor_account',
    }),
    this.initMenuSidebar('tai-khoan', 'Account', {
      icon: 'account_circle',
    }),
    this.initMenuSidebar('link', 'Link', {
      icon: 'web',
    }),
    this.initMenuSidebar('image-manager', 'Image manager', {
      icon: 'image',
    }),
    this.initMenuSidebar('video-manager', 'Video manager', {
      icon: 'movie',
    }),
    // this.initMenuSidebar('code', 'Code', {
    //   icon: 'web',
    // }),
    // this.initMenuSidebar('diary', 'Diary', {
    //   icon: 'web',
    // }),
    // Image
    // Video
    // D
  ]
  constructor() {
  }

  ngOnInit() {
  }

  initMenuSidebar(route, title, extra) {
    return { route, title, extra };
  }
}
