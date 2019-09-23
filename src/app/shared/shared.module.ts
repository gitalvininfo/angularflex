import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



// insert this=====================
import { MaterialModule } from '../material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { CalendarComponent } from '../components/calendar/calendar.component';
import { CalendarDialogComponent } from '../components/calendar/calendar-dialog/calendar-dialog.component';
// insert this=======================

@NgModule({
  declarations: [CalendarComponent, CalendarDialogComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    })
  ],
  exports: [
    CalendarComponent,
    CalendarDialogComponent,
    // MaterialModule,
    // FormsModule,
    // ReactiveFormsModule,
  ],
  entryComponents: [
    CalendarDialogComponent
  ]
})
export class SharedModule { }
