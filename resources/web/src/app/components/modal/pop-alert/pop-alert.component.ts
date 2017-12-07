import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBar  } from '@angular/material';

@Component({
  selector: 'app-pop-alert',
  templateUrl: './pop-alert.component.html',
  styleUrls: ['./pop-alert.component.scss']
})
export class PopAlertComponent implements OnInit {
  content;
  constructor(
    public dialogRef: MatDialogRef<PopAlertComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private snackBar: MatSnackBar ,
  ) {
    this.content = data;
  }

  ngOnInit() {
  }

  continue() {
    this.dialogRef.close(true);
  }

  cancel() {
    this.dialogRef.close(false);
  }

}
