import { Router, ActivatedRoute } from '@angular/router';
import { PatternValidator } from './../../../validators/pattern.validators';
import { AccountService } from './../account.service';
import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBar, MatDialog } from '@angular/material';
import { Component, OnInit, Inject, ViewChild } from '@angular/core';

@Component({
  selector: 'app-account-form',
  templateUrl: './account-form.component.html',
  styleUrls: ['./account-form.component.scss']
})
export class AccountFormComponent implements OnInit {
  @ViewChild('formAccount') formAccount;

  account = {
    list_account: []
  };
  showAdd: boolean = true;
  account_add: object = {};
  addAccount: boolean = false;
  validFormEditAcc: boolean = true;
  pattern = {
    email: PatternValidator.EMAIL_REGEXP
  };
  id: string;

  constructor(
    private accountService: AccountService,
    private snackBar: MatSnackBar,
    public dialog: MatDialog,
    private router: Router,
    private activeRoute: ActivatedRoute,
  ) {
    this.activeRoute.params.subscribe(params => {
      if (params.id) {
        this.accountService.edit(params.id).subscribe(data => {
          this.account = data.account;
          this.showAdd = false;
          this.id = params.id;
        })
      }
    });
  }

  ngOnInit() {

  }

  toggleAddForm() {
    this.addAccount = !this.addAccount;
    this.account_add = {};
  }

  submitAddAccount(form) {
    if (!form.valid) {
      return;
    }
    this.account.list_account.push(this.account_add);
    this.toggleAddForm();
  }

  onChangeForm(event, index) {
    this.account.list_account[index].validForm = event === 'VALID';
    this.validFormEditAcc = this.account.list_account.reduce((sum, item) => sum = sum && item.validForm, true);
  }

  onDeleteAccount(index) {
    this.account.list_account.splice(index, 1);
  }

  submit(form) {
    if (!this.validFormEditAcc && !form.valid) {
      return;
    }
    if (this.showAdd) {
      this.accountService.create({
        data: this.account
      }).subscribe(data => {
        this.router.navigate(['tai-khoan'], { queryParams: { page: 1, limit: 10 } });
        const snackBarRef = this.snackBar.open('Thêm tài khoản thành công', 'Close', {
          duration: 3000
        });
      });
    } else {
      this.accountService.update(this.id,{
        data: this.account
      }, this.id).subscribe(data => {
        this.router.navigate(['tai-khoan'], { queryParams: { page: 1, limit: 10 } });
        const snackBarRef = this.snackBar.open('Sửa tài khoản thành công', 'Close', {
          duration: 3000
        });
      });
    }
  }
}
