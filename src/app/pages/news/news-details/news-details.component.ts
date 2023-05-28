import { Component, OnDestroy } from '@angular/core';
import { News } from "../../../models/news.interface";
import { DisplayType } from "../../../models/display-type.enum";
import { ActivatedRoute } from "@angular/router";
import { NewsService } from "../../../services/news.service";
import { combineLatest, filter, pluck, Subscription, take, tap } from "rxjs";
import { MatDialog } from "@angular/material/dialog";
import { NewsDetailsDialogComponent } from "../news-details-dialog/news-details-dialog.component";

const MAX_ALLOWED_WIDTH_FOR_INLINE_DISPLAY = 1024;

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.scss'],
})
export class NewsDetailsComponent implements OnDestroy {

  selectedNews: News;
  displayType: DisplayType;
  subscription: Subscription;

  constructor(
    public dialog: MatDialog,
    private _activatedRoute: ActivatedRoute,
    private _newsService: NewsService,
  ) {

    this.subscription = combineLatest(
      this._newsService.newsSubject.pipe(
        filter(news => news.length > 0),
        take(1)
      ),
      this._activatedRoute.params
        .pipe(
          pluck('id'),
        )
    ).subscribe(([news, id]) => this.handleNewsChanged(id));
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  handleNewsChanged(id: string) {
    this.displayType = window.innerWidth >= MAX_ALLOWED_WIDTH_FOR_INLINE_DISPLAY ?
      DisplayType.INLINE :
      DisplayType.POPUP;
    const selectedNews = this._newsService.getNewsById(id);
    if (this.displayType === DisplayType.INLINE) {
      this.selectedNews = selectedNews;
    } else if (this.displayType === DisplayType.POPUP) {
      this.dialog.open<NewsDetailsDialogComponent>(NewsDetailsDialogComponent, {
        data: selectedNews,
        height: '400px',
        width: '70%'
      });
    }
    this._newsService.updateViewNumber(id);
  }

  onClose(): void {
    this._newsService.closeDetails();
  }
}
