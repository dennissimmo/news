import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-news-button',
  templateUrl: './add-news-button.component.html',
  styleUrls: ['./add-news-button.component.scss']
})
export class AddNewsButtonComponent {

  @Output() addNewsClicked: EventEmitter<void> = new EventEmitter<void>();

  onClick(): void {
    this.addNewsClicked.emit();
  }
}
