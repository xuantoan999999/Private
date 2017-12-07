import { HttpService } from './services/http.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my App';
  hideSidebar: boolean = true;
  constructor(httpService: HttpService) {
  }

  hideSideBar(){
    console.log("Hide Sidebar");
  }
  showSideBar(){
    console.log("Show Sidebar")
  }
}
