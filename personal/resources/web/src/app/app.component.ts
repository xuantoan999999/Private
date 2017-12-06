import { HttpService } from './services/http.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  constructor(httpService: HttpService) {
    httpService.get().subscribe(data => {
    });
  }
}
