import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Flight } from 'src/app/models/flight.model';

@Component({
  selector: 'app-flight-card',
  templateUrl: './flight-card.component.html',
  styleUrls: ['./flight-card.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FlightCardComponent {

  @Input() flight: Flight;
  

}
