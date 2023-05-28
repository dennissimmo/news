import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewsListComponent } from './pages/news/news-list/news-list.component';
import { NewsCardComponent } from './pages/news/news-card/news-card.component';
import { NewsDetailsComponent } from './pages/news/news-details/news-details.component';
import { AddNewsDialogComponent } from './pages/news/add-news-dialog/add-news-dialog.component';
import { SliderComponent } from './components/slider/slider.component';
import { AddNewsButtonComponent } from './pages/news/add-news-button/add-news-button.component';
import { NewsComponent } from "./pages/news/news.component";
import { HttpClientModule } from "@angular/common/http";
import { registerLocaleData } from '@angular/common';
import localeUk from '@angular/common/locales/uk';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from "@angular/material/icon";
import { MatDividerModule } from "@angular/material/divider";
import { MatButtonModule } from "@angular/material/button";
import { NewsDetailsDialogComponent } from './pages/news/news-details-dialog/news-details-dialog.component';
import { MatDialogModule } from "@angular/material/dialog";
import { TruncatePipe } from "./pipes/truncate.pipe";
import { MatInputModule } from "@angular/material/input";
import { ReactiveFormsModule } from "@angular/forms";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";

registerLocaleData(localeUk);

@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    NewsListComponent,
    NewsCardComponent,
    NewsDetailsComponent,
    AddNewsDialogComponent,
    SliderComponent,
    AddNewsButtonComponent,
    NewsDetailsDialogComponent,
    TruncatePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatIconModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDividerModule,
    MatDividerModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'uk_UA' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
