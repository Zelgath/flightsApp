import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Flight } from 'src/app/models/flight.model';

@Injectable({
  providedIn: 'root'
})
export class FlightsService {
  private API_URL = '/flights';

  constructor(private db: AngularFireDatabase) { }

  getFlights(): Observable<Flight[]> {
    return this.db.list<Flight>(this.API_URL).snapshotChanges()
      .pipe(map(response => response.map(flight => this.assignKey(flight))))
  }

  private assignKey(flight) {
    return { ...flight.payload.val(), key: flight.key }
  }
}