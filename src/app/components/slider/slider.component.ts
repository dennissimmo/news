import { AfterContentChecked, AfterContentInit, Component, Input, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements AfterContentChecked, OnDestroy {

  @Input() controls: boolean;
  @Input() autoPlay: boolean;

  interval = 3000;

  slides: HTMLCollectionOf<Element>;
  slideClassName = 'slide';
  slidesAmount: number;
  slide: number;
  intervalId: number;

  ngAfterContentChecked(): void {
    this.slides = document.getElementsByClassName('slide');
    if (this.slides && this.slides.length > 0 && this.slidesAmount !== this.slides.length) {
      this.slidesAmount = this.slides.length;
      this.slide = 0;
      this._setInitialClasses();
      if (this.autoPlay) {
        this._autoPlayInterval();
      }
    }
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }

  private _autoPlayInterval(): void {
    if (this.intervalId) {
      return;
    }

    this.intervalId = setInterval(() => {
      if (this.slide === this.slidesAmount - 1) {
        this.slide = 0;
      } else {
        this.slide++;
      }

      this._moveTo(this.slide);
    }, this.interval);
  }

  private _setInitialClasses(): void {
    this.slides[this.slidesAmount - 1].classList.add('prev');
    this.slides[0]?.classList?.add('active');
    this.slides[1]?.classList?.add('next');
  }

  private _moveTo(slide: number): void {
    let newPrevious = slide - 1;
    let newNext = slide + 1;
    let oldPrevious = slide - 2;
    let oldNext = slide + 2;

    if (newPrevious <= 0) {
      oldPrevious = this.slidesAmount - 1;
      oldNext = oldPrevious - 1;
    } else if (newNext >= this.slidesAmount - 1) {
      oldNext = 0;
    }

    // Check if current slide is at the beginning or end and sets slide numbers
    if (slide === 0) {
      newPrevious = this.slidesAmount - 1;
      oldPrevious = this.slidesAmount - 2;
      oldNext = slide + 1;
    } else if (slide === this.slidesAmount - 1) {
      newPrevious = slide - 1;
      newNext = 0;
      oldNext = 1;
    }

    // By adding and removing classes, we'll be triggering the carousel's transitions.
    // Based on the current slide, reset to default classes.
    this.slides[oldPrevious].className = this.slideClassName;
    this.slides[oldNext].className = this.slideClassName;

    // Add the new classes
    this.slides[newPrevious].className = this.slideClassName + ' prev';
    this.slides[slide].className = this.slideClassName + ' active';
    this.slides[newNext].className = this.slideClassName + ' next';
  }

  moveNext(): void {
    if (this.slide === this.slidesAmount - 1) {
      this.slide = 0;
    } else {
      this.slide++;
    }

    this._moveTo(this.slide);
  }

  movePrev(): void {
    if (this.slide === 0) {
      this.slide = this.slidesAmount - 1;
    } else {
      this.slide--;
    }

    this._moveTo(this.slide);
  }
}
