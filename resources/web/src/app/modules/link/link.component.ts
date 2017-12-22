import { Component, OnInit } from '@angular/core';
import { LinkService } from './link.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog, MatSnackBar } from '@angular/material';
import { PopAlertComponent } from '../../components/modal/pop-alert/pop-alert.component';
import { WebsiteFormComponent } from './website-form/website-form.component';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.scss']
})
export class LinkComponent implements OnInit {
  websiteList;
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
  filter = {
    search: ''
  };
  showLoading: boolean = true;

  constructor(
    private linkService: LinkService,
    private router: Router,
    private activeRoute: ActivatedRoute,
    public dialog: MatDialog,
    private snackBar: MatSnackBar,
  ) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.linkService.getAll(this.activeRoute.snapshot.queryParams)
      .subscribe(data => {
        this.websiteList = data.data;
        this.rows = this.websiteList.websites;
        this.totalItems = this.websiteList.totalItems;
        this.itemsPerPage = this.websiteList.itemsPerPage;
        this.currentPage = this.websiteList.currentPage - 1;
        this.totalPage = this.websiteList.totalPage;
        this.showLoading = false;
        this.filter.search = this.activeRoute.snapshot.queryParams.search;
      })
  }

  setPage(pageInfo) {
    let queryParams = JSON.parse(JSON.stringify(this.activeRoute.snapshot.queryParams));
    queryParams.page = pageInfo.offset + 1;
    queryParams.limit = this.itemsPerPage;
    this.router.navigate(['link'], { queryParams });
    this.activeRoute.queryParams.subscribe(data => {
      this.getData();
    });
  }

  popAdd() {
    const dialogRef = this.dialog.open(WebsiteFormComponent, {
      width: '750px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getData();
    });
  }
  popEdit(id) {
    const dialogRef = this.dialog.open(WebsiteFormComponent, {
      width: '750px',
      data: { id }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getData();
    });
  }

  popDelete(id): void {
    const dialogRef = this.dialog.open(PopAlertComponent, {
      width: '400px',
      data: {
        message: 'Do you want to delete this website'
      }
    });

    dialogRef.afterClosed().subscribe(ok => {
      if (ok === true) {
        this.linkService.remove(id).subscribe(data => {
          const snackBarRef = this.snackBar.open('Xóa thành công', 'Close', {
            duration: 3000
          });
          this.setPage({ offset: 0 });
        });
      }
    });
  }

  filterForm(form) {
    if (!form.valid) {
      return;
    }
    const queryParams = { page: 1, limit: this.itemsPerPage };

    if (this.filter.search) {
      (<any>queryParams).search = this.filter.search;
    }
    this.router.navigate(['link'], { queryParams });
    this.activeRoute.queryParams.subscribe(data => {
      this.getData();
    });
  }

  resetForm() {
    const queryParams = { page: 1, limit: this.itemsPerPage };

    this.router.navigate(['link'], { queryParams });
    this.activeRoute.queryParams.subscribe(data => {
      this.getData();
    });
  }
}
