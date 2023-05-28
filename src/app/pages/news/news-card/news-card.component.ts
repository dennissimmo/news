import { Component, EventEmitter, Input, Output } from '@angular/core';
import { News, Tag } from "../../../models/news.interface";

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.scss']
})
export class NewsCardComponent {


  @Input() news: News;
  @Output() newsSelected: EventEmitter<News> = new EventEmitter<News>();

  get tag(): Tag | null {
    if (this.news && this.news.tags && this.news.tags.length !== 0) {
      return this.news.tags[0];
    }

    return null;
  }

  onSelected(): void {
    this.newsSelected.emit(this.news);
  }
}
