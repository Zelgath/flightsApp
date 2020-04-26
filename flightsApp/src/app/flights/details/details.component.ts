import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Flight } from 'src/app/models/flight.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  flight: Flight;

  constructor(private dialogRef: MatDialogRef<DetailsComponent>,
    @Inject(MAT_DIALOG_DATA) private data: Flight,
    private router: Router) {
    this.flight = data;
  }

  goToEditFlight() {
    this.close();
    this.router.navigate(['/dashboard/flights', this.flight.key]);
  }

  close() {
    this.dialogRef.close();
  }
}
