import { NgModule } from "@angular/core";
import { MatDividerModule } from "@angular/material/divider";
import { MatButtonModule } from "@angular/material/button";
import { MatDialogModule } from "@angular/material/dialog";
import { MatInputModule } from "@angular/material/input";
import { ReactiveFormsModule } from "@angular/forms";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatIconModule } from "@angular/material/icon";
import { AddNewsButtonComponent } from "./add-news-button/add-news-button.component";
import { NewsDetailsDialogComponent } from "./news-details-dialog/news-details-dialog.component";
import { NewsComponent } from "./news.component";
import { NewsListComponent } from "./news-list/news-list.component";
import { NewsCardComponent } from "./news-card/news-card.component";
import { NewsDetailsComponent } from "./news-details/news-details.component";
import { AddNewsDialogComponent } from "./add-news-dialog/add-news-dialog.component";
import { NewsRoutingModule } from "./news-routing.module";
import { SliderModule } from "../../components/slider/slider.module";
import { CommonModule } from "@angular/common";
import { PipesModule } from "../../pipes/pipes.module";

@NgModule({
  declarations: [
    NewsCardComponent,
    AddNewsButtonComponent,
    NewsDetailsDialogComponent,
    NewsComponent,
    NewsListComponent,
    NewsDetailsComponent,
    AddNewsDialogComponent,
  ],
  imports: [
    CommonModule,
    MatDividerModule,
    MatDividerModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    MatIconModule,
    SliderModule,
    PipesModule,
    NewsRoutingModule,
  ],
  exports: [
    NewsRoutingModule
  ]
})
export class NewsModule {}
