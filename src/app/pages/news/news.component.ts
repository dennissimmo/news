import { Component, OnInit } from '@angular/core';
import { NewsService } from "../../services/news.service";

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  constructor(
    private _newsService: NewsService
  ) {
  }

  ngOnInit() {
    this._newsService.loadNews()
      .subscribe({
        next: news => console.log(news),
        error: err => console.log(err)
      });
  }
}
