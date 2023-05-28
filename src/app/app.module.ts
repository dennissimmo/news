import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewsListComponent } from './pages/news/news-list/news-list.component';
import { NewsCardComponent } from './pages/news/news-card/news-card.component';
import { NewsDetailsComponent } from './pages/news/news-details/news-details.component';
import { AddNewsDialogComponent } from './pages/news/add-news-dialog/add-news-dialog.component';
import { SliderComponent } from './components/slider/slider.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { AddNewsButtonComponent } from './pages/news/add-news-button/add-news-button.component';
import { NewsComponent } from "./pages/news/news.component";

@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    NewsListComponent,
    NewsCardComponent,
    NewsDetailsComponent,
    AddNewsDialogComponent,
    SliderComponent,
    SpinnerComponent,
    AddNewsButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
