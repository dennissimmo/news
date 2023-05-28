import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatDialogRef } from "@angular/material/dialog";
import { News } from "../../../models/news.interface";

@Component({
  selector: 'app-add-news-dialog',
  templateUrl: './add-news-dialog.component.html',
  styleUrls: ['./add-news-dialog.component.scss']
})
export class AddNewsDialogComponent implements OnInit {

  newsFormGroup: FormGroup;
  isButtonDisabled: boolean;
  maxSymbolLength = 150;

  constructor(
    private _fb: FormBuilder,
    private _matDialog: MatDialogRef<AddNewsDialogComponent>
  ) {}

  ngOnInit(): void {
    this.isButtonDisabled = true;
    this.newsFormGroup = this._fb.group({
      'title': ['', { validators: [Validators.required, Validators.maxLength(this.maxSymbolLength)] }],
      'description': ['', { validators: [Validators.required, Validators.maxLength(this.maxSymbolLength * 2)] }],
    });
  }

  addNews(): void {
    const news: Partial<News> = {
      title: this.newsFormGroup.controls['title'].value,
      description: this.newsFormGroup.controls['description'].value,
    };
    this._matDialog.close(news);
  }
}
