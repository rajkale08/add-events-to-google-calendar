import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { AddToCalendarComponent } from './add-to-calendar.component';
import { HttpClientModule } from "@angular/common/http";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [AddToCalendarComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  imports: [
    HttpClientModule,
    CommonModule
  ],
  exports: [AddToCalendarComponent]
})
export class AddToCalendarModule { }
