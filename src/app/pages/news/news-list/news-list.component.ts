import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NewsService } from "../../../services/news.service";
import { News } from "../../../models/news.interface";

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent {

  @Input() newsList: News[];
  @Output() newsSelected: EventEmitter<News> = new EventEmitter<News>();

  constructor(
    private _newsService: NewsService
  ) {

  }

  trackById(index: number, item: News): string {
    return item.ID;
  }

  onNewsSelected(news: News) {
    this._newsService.newsSelectionSubject.next(news);
  }
}
