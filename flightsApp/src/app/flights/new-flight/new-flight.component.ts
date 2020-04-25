import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FlightFormComponent } from '../flight-form/flight-form.component';
import { FlightsService } from 'src/app/core/services/flights.service';
import { Flight } from 'src/app/models/flight.model';
import { Moment } from 'moment';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-new-flight',
  templateUrl: './new-flight.component.html',
  styleUrls: ['./new-flight.component.css']
})
export class NewFlightComponent {
  @ViewChild('flightForm') flightForm: FlightFormComponent;

  constructor(private dialogRef: MatDialogRef<NewFlightComponent>,
              private flightService: FlightsService,
              private toast: MatSnackBar) { }

  createFlight () {
    const newFlight : Flight = {
      "additionalInformation": this.flightForm.form.get('additionalInformation').value,
      "code": this.flightForm.form.get('code').value,
      "crew": this.flightForm.form.get('crew').value,
      "departureTime": 
      this.formatTimeAndDate(this.flightForm.form.get('departureDate').value,
      this.flightForm.form.get('departureTime').value),
      "destination": this.flightForm.form.get('destination').value,
      "origin": this.flightForm.form.get('origin').value,
      "returnTime": 
      this.formatTimeAndDate(this.flightForm.form.get('returnDate').value,
      this.flightForm.form.get('returnTime').value),
      "withSKPlanesDiscount": this.flightForm.form.get('origin').value,
      "key": null
    }
    this.flightService.addFlight(newFlight)
    .then(this.onCreatingSuccess.bind(this), this.onCreatingFailure.bind(this));
  }

  private onCreatingSuccess() {
    this.dialogRef.close();
    this.toast.open('Flight has been successfully created!', '', {panelClass: 'toast-success'})
  }

  private onCreatingFailure(error) {
    this.toast.open(error.message, '', {panelClass: 'toast-success'})
  }

  private formatTimeAndDate(date: Moment, time: string) : string {
    return date.toDate().toLocaleDateString('pl-PL') + ', ' + time;
  }


}
