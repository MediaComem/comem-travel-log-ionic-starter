import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { RawTrip, rawTripToTrip, Trip, tripToRawTrip } from './trip-model';

@Injectable({ providedIn: 'root' })
export class TripApi {
  constructor(private http: HttpClient) {}

  createTrip$(trip: Trip): Observable<Trip> {
    return this.http
      .post<RawTrip>(`${environment.apiUrl}/trips`, tripToRawTrip(trip))
      .pipe(map(rawTripToTrip));
  }

  getTrip$(tripId: string): Observable<Trip> {
    return this.http
      .get<RawTrip>(`${environment.apiUrl}/trips/${tripId}`)
      .pipe(map(rawTripToTrip));
  }
}
