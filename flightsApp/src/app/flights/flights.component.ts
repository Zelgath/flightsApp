import { Component, OnInit } from '@angular/core';
import { FlightsService } from '../core/services/flights.service';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.css']
})
export class FlightsComponent implements OnInit {

  constructor(private flightsService : FlightsService) { }

  ngOnInit(): void {
    this.flightsService.getFlights().subscribe(console.log)
  }

}
