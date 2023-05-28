import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { BehaviorSubject, catchError, map, Observable, of, Subject, tap, throwError } from "rxjs";
import { News } from "../models/news.interface";
import { Router } from "@angular/router";

const PATH_TO_NEWS = "assets/json/news.json"

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private _newsSubject: BehaviorSubject<News[]>;
  private _newsSelectionSubject: Subject<News>;

  constructor(
    private _httpClient: HttpClient,
    private _router: Router
  ) {
    this._newsSubject = new BehaviorSubject<News[]>([]);
    this._newsSelectionSubject = new Subject<News>();
  }

  get newsSubject(): BehaviorSubject<News[]> {
    return this._newsSubject;
  }

  get newsSelectionSubject(): Subject<News> {
    return this._newsSelectionSubject;
  }

  getNewsById(id: string): News {
    const news = this.newsSubject.value.find(news => news.ID === id);
    return news ? news : {} as News;
  }

  loadNews(): Observable<News[]> {
    return this._httpClient.get<News[]>(PATH_TO_NEWS).pipe(
      map(news => news.sort((a, b) => {
        if (a.date > b.date) {
          return -1;
        } else if (a.date < b.date) {
          return 1;
        } else {
          return 0;
        }
      })),
      tap(news => this._newsSubject.next(news)),
      catchError((error: HttpErrorResponse) => {
        let errorMessage: string;
        if (error.error instanceof ErrorEvent) {
          errorMessage = `An error occurred: ${error.error.message}`;
        } else {
          errorMessage = `Server returned error code ${error.status}: ${error.message}`;
        }

        return throwError(errorMessage);
      })
    );
  }

  addNews(news: News): void {
    const updatedNews = [news, ...this._newsSubject.value ];
    this._newsSubject.next(updatedNews);
  }

  updateViewNumber(id: string): void {
    if (!id) return;
    const currentNews = this._newsSubject.value;
    const news = currentNews.find(news => news.ID === id);
    if (news) {
      news.viewCount += 1;
      this._newsSubject.next(currentNews);
    }
  }

  getLastNews(): Observable<News[]> {
    return this._newsSubject.pipe(
      map(news => news.slice(0, 3))
    );
  }

  public closeDetails(): void {
    this._router.navigate([{
      outlets: {
        details: null
      }
    }], );
  }

}
