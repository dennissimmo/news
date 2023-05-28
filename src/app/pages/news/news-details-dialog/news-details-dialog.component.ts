import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { News } from "../../../models/news.interface";
import { Router } from "@angular/router";

@Component({
  selector: 'app-news-details-dialog',
  templateUrl: './news-details-dialog.component.html',
  styleUrls: ['./news-details-dialog.component.scss']
})
export class NewsDetailsDialogComponent {

  constructor(
    private _matDialogRef: MatDialogRef<NewsDetailsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: News,
    private _router: Router
  ) {}

  onClose(): void {
    this._router.navigate([{
      outlets: {
        details: null
      }
    }], );
    this._matDialogRef.close();
  }
}
