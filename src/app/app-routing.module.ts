import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsComponent } from "./pages/news/news.component";
import { NewsDetailsComponent } from "./pages/news/news-details/news-details.component";

const routes: Routes = [
  {
    path: '',
    pathMatch: "full",
    redirectTo: 'news'
  },
  {
    path: 'news',
    component: NewsComponent
  },
  {
    path: 'news-details/:id',
    component: NewsDetailsComponent,
    outlet: 'details'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
