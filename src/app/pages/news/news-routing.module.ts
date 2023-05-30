import { NgModule } from "@angular/core";
import { Router, RouterModule } from "@angular/router";
import { NewsComponent } from "./news.component";
import { NewsDetailsComponent } from "./news-details/news-details.component";

const NEWS_ROUTES = [
  {
    path: '',
    component: NewsComponent,
    children: [
      {
        path: ':id',
        component: NewsDetailsComponent
      }
    ]
  },
]

@NgModule({
  imports: [RouterModule.forChild(NEWS_ROUTES)],
  exports: [RouterModule]
})
export class NewsRoutingModule {}
