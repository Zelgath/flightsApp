import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightsComponent } from './flights.component';
import { FlightCardComponent } from './flight-card/flight-card.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [FlightsComponent, FlightCardComponent],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ]
})
export class FlightsModule { }
