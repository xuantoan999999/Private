import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { AuthService } from '../../services/auth/auth.service';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  config;
  csrfToken;
  showLogin: boolean = false;
  countClick: number = 0;

  constructor(
    private loginService: LoginService,
    private authService: AuthService,
    private snackBar: MatSnackBar ,
    private router: Router
  ) {
    
  }

  ngOnInit() {
  }

  noFunction(message) {
    if (this.countClick === 5) {
      message = 'Không có đâu. Thằng dev lười code rồi. Đừng cố nữa';
    }
    if (this.countClick === 10) {
      message = 'Đã bảo không có rồi. Đừng cố bấm nữa.';
    }
    if (this.countClick === 15) {
      message = 'Dai ghê ta';
    }
    if (this.countClick >= 20) {
      message = 'Lầy vãi! Acc nè, vào đi: skecgash1/skecgash';
    }
    const snackBarRef = this.snackBar.open(message, 'Close', {
      duration: 3000
    });
    this.countClick++;
  }

  submit(form) {
    if (!form.valid) {
      return;
    }
    this.loginService.login(form.value.username, form.value.password).subscribe(data => {
        const token = data.token;
        localStorage.setItem(`Personal_userInfo`, token);
        this.router.navigate(['dashboard']);
      }, error => {
        const err = JSON.parse(error._body);
        const message = err.reduce((string, item) => string + item.message, '');
        const snackBarRef = this.snackBar.open(message, 'Close', {
          duration: 3000
        });
      });
  }

}
