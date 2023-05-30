import { Component, OnDestroy, OnInit } from '@angular/core';
import { NewsService } from "../../services/news.service";
import { BehaviorSubject, Observable, Observer, Subject, takeUntil, takeWhile } from "rxjs";
import { News } from "../../models/news.interface";
import { DisplayType } from "../../models/display-type.enum";
import { Router } from "@angular/router";
import { MatDialog } from "@angular/material/dialog";
import { AddNewsDialogComponent } from "./add-news-dialog/add-news-dialog.component";
import { nanoid } from "nanoid";

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit, OnDestroy {

  isLoading: boolean;
  newsSubject: BehaviorSubject<News[]>;
  errorMessage: string;
  destroy$: Subject<void>;

  constructor(
    private _newsService: NewsService,
    private _router: Router,
    private _matDialog: MatDialog
  ) {
    this.destroy$ = new Subject<void>();
    this.newsSubject = this._newsService.newsSubject;
  }

  get selectedNews(): Subject<News> {
    return this._newsService.newsSelectionSubject;
  }

  get lastNews(): Observable<News[]> {
    return this._newsService.getLastNews();
  }

  ngOnInit(): void {
    this.isLoading = true;
    this._newsService.newsSelectionSubject
      .pipe(
        takeUntil(this.destroy$)
      )
      .subscribe(news => {
        this._router.navigate(['news', news.ID]);
    })

    const newsObserver: Partial<Observer<News[]>> = {
      next: () => this.isLoading = false,
      error: message => this.errorMessage = message
    };

    this._newsService.loadNews()
      .subscribe(newsObserver);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  onNewsAddedClick(): void {
    this._matDialog.open(AddNewsDialogComponent)
      .afterClosed().subscribe((data) => {
        if (data) {
          const { title, description } = data;
          const id = nanoid();
          const news: News = {
            title,
            description,
            ID: id,
            date: new Date().toISOString(),
            commentsCount: 0,
            viewCount: 0
          };
          this._newsService.addNews(news);
        }
      });
  }
}
