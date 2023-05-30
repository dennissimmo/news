import { NgModule } from "@angular/core";
import { SliderComponent } from "./slider.component";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [
    SliderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SliderComponent
  ]
})
export class SliderModule {}
