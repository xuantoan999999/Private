import { AuthService } from './../../services/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { PopAlertComponent } from '../../components/modal/pop-alert/pop-alert.component';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

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
