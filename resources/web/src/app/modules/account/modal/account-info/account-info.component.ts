import { AccountService } from './../../account.service';
import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-account-info',
  templateUrl: './account-info.component.html',
  styleUrls: ['./account-info.component.scss']
})
export class AccountInfoComponent implements OnInit {
  account;
  constructor(
    public dialogRef: MatDialogRef<AccountInfoComponent>,
    private accountService: AccountService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private snackBar: MatSnackBar,
  ) {
    this.accountService.edit(data.id).subscribe(data =>{
      this.account = data.account;
    })
  }

  ngOnInit() {
  }

}
