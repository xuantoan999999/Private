import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
import { PopAlertComponent } from '../modal/pop-alert/pop-alert.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit() {
  }

  logout(){
    const dialogRef = this.dialog.open(PopAlertComponent, {
      width: '300px',
      data: {
        message: 'Are you sure you want to log out'
      }
    });
    dialogRef.afterClosed().subscribe(ok => {
      if (ok === true) {
        localStorage.removeItem(`Personal_userInfo`);
        this.authService.hideSidebar();
        this.router.navigate(['dang-nhap'])
      }
    });
  }

}
