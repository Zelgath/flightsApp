import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { FlightsService } from 'src/app/core/services/flights.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FlightFormComponent } from '../flight-form/flight-form.component';
import { tap } from 'rxjs/operators';
import { Flight } from 'src/app/models/flight.model';
import { Moment } from 'moment';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-edit-flight',
  templateUrl: './edit-flight.component.html',
  styleUrls: ['./edit-flight.component.css']
})
export class EditFlightComponent implements AfterViewInit {
  @ViewChild('flightForm') flightForm : FlightFormComponent;
  flight : Flight;

  constructor(private flightsService: FlightsService,
              private activatedRoute : ActivatedRoute,
              private toast: MatSnackBar,
              private router: Router) { }

  ngAfterViewInit(): void {
    if (this.flightForm) {
    this.loadFlight();
    }
  }

  removeFlight() {
    this.flightsService.removeFlight(this.flight.key).then(
      this.onRemoveSuccess.bind(this), this.onFailure.bind(this)
    )
  }

  editFlight() {
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
    this.flightsService.editFlight(this.flight.key, newFlight).then(
      this.onEditSuccess.bind(this), this.onFailure.bind(this)
    );
  }

  private onEditSuccess() {
    this.toast.open('Flight has been successfully edited', '', {panelClass: 'toast-success'})
    this.router.navigate(['/dashboard/flights'])
  }

  private onFailure(error) {
    this.toast.open(error.message, '', {panelClass: 'toast-error'})
  }

  private onRemoveSuccess() {
    this.router.navigate(['/dashboard/flights'])
    this.toast.open('Flight has been successfully removed', '', {panelClass: 'toast-success'})
  }


  private loadFlight() {
    const key= this.activatedRoute.snapshot.params['key'];
    this.flightsService.getFlight(key).pipe(
      tap(flight => this.flightForm?.setFlight(flight))
    ).subscribe (flight=>{
      this.flight = flight
    })
  }

  private formatTimeAndDate(date: Moment, time: string) : string {
    return date.toDate().toLocaleDateString('pl-PL') + ', ' + time;
  }

}
