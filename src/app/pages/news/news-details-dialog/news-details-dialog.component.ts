import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { News } from "../../../models/news.interface";
import { Router } from "@angular/router";
import { NewsService } from "../../../services/news.service";

@Component({
  selector: 'app-news-details-dialog',
  templateUrl: './news-details-dialog.component.html',
  styleUrls: ['./news-details-dialog.component.scss']
})
export class NewsDetailsDialogComponent {

  constructor(
    private _matDialogRef: MatDialogRef<NewsDetailsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: News,
    private _newsService: NewsService
  ) {}

  onClose(): void {
    this._newsService.closeDetails();
    this._matDialogRef.close();
  }
}
