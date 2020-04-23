import { Component, OnInit } from '@angular/core';
import { FlightsService } from '../core/services/flights.service';
import { Flight } from '../models/flight.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.css']
})
export class FlightsComponent {

  flights: Observable<Flight[]> = this.flightsService.getFlights();
  constructor(private flightsService: FlightsService) { }

}
