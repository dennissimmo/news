import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { BehaviorSubject, catchError, Observable, of, tap, throwError } from "rxjs";
import { News } from "../models/news.interface";

const PATH_TO_NEWS = "assets/json/nes.json"

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private _newsSubject: BehaviorSubject<News[]>;

  constructor(
    private _httpClient: HttpClient
  ) {
    this._newsSubject = new BehaviorSubject<News[]>([]);
  }

  get newsSubject(): BehaviorSubject<News[]> {
    return this._newsSubject;
  }

  loadNews(): Observable<News[]> {
    return this._httpClient.get<News[]>(PATH_TO_NEWS).pipe(
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
    const updatedNews = [...this._newsSubject.value, news];
    this._newsSubject.next(updatedNews);
  }

  getLastNews(): Observable<News[]> {
    // TODO: perform sorting by date and slice last 3 news
    return this._newsSubject.asObservable();
  }
}
