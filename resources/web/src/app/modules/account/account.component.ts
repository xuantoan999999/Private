import { AccountInfoComponent } from './modal/account-info/account-info.component';
import { Component, OnInit } from '@angular/core';
import { AccountService } from './account.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog, MatSnackBar } from '@angular/material';
import { PopAlertComponent } from '../../components/modal/pop-alert/pop-alert.component';
import { AccountFormComponent } from './account-form/account-form.component';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  accounts;
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  totalPage: number;
  sortable: boolean = false;
  rows = [];
  columns = [
    { name: 'Email' },
    { name: 'Name' }
  ];
  showLoading: boolean = true;
  filter = {
    search: ''
  };

  constructor(
    private accountService: AccountService,
    private router: Router,
    private activeRoute: ActivatedRoute,
    public dialog: MatDialog,
    private snackBar: MatSnackBar,
  ) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.accountService.getAll(this.activeRoute.snapshot.queryParams)
      .subscribe(data => {
        this.accounts = data.accountList;
        this.rows = this.accounts.accounts;
        this.totalItems = this.accounts.totalItems;
        this.itemsPerPage = this.accounts.itemsPerPage;
        this.currentPage = this.accounts.currentPage - 1;
        this.totalPage = this.accounts.totalPage;
        this.showLoading = false;

        let params = this.activeRoute.snapshot.queryParams;
        this.filter.search = params.search;
      });
  }

  defaultFilter() {
    return {
      search: ''
    }
  }

  setPage(pageInfo) {
    let queryParams = JSON.parse(JSON.stringify(this.activeRoute.snapshot.queryParams));
    queryParams.page = pageInfo.offset + 1;
    queryParams.limit = this.itemsPerPage;
    this.router.navigate(['tai-khoan'], { queryParams });
    this.activeRoute.queryParams.subscribe(data => {
      this.getData();
    });
  }

  popAdd(): void {
    const dialogRef = this.dialog.open(AccountFormComponent, {
      width: '750px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.reloadDataFromPop(result);
    });
  }

  popDeleteUser(id): void {
    const dialogRef = this.dialog.open(PopAlertComponent, {
      width: '400px',
      data: {
        message: 'Do you want to delete this user'
      }
    });

    dialogRef.afterClosed().subscribe(ok => {
      if (ok === true) {
        this.accountService.remove(id).subscribe(data => {
          const snackBarRef = this.snackBar.open('Xóa user thành công', 'Close', {
            duration: 3000
          });
          this.setPage({ offset: 0 });
        });
      }
    });
  }

  popInfo(id): void {
    const dialogRef = this.dialog.open(AccountInfoComponent, {
      width: '750px',
      data: {id}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.reloadDataFromPop(result);
    });
  }

  filterForm(form) {
    if (!form.valid) {
      return;
    }
    const queryParams = { page: 1, limit: this.itemsPerPage, search: null };

    if (this.filter.search) {
      queryParams.search = this.filter.search;
    }
    this.router.navigate(['tai-khoan'], { queryParams });
    this.activeRoute.queryParams.subscribe(data => {
      this.getData();
    });
  }

  resetForm() {
    const queryParams = { page: 1, limit: this.itemsPerPage };

    this.router.navigate(['tai-khoan'], { queryParams });
    this.activeRoute.queryParams.subscribe(data => {
      this.getData();
    });
  }

  reloadDataFromPop(result) {
    if (result && result.reload) {
      this.getData();
    }
  }

}
