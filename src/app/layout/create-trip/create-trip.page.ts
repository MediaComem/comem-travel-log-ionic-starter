import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TripApi } from 'src/app/api/trip-api.service';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-create-trip',
  templateUrl: './create-trip.page.html',
  styleUrls: ['./create-trip.page.scss'],
})
export class CreateTripPage {
  tripId: string;

  constructor(
    // Inject the authentication provider.
    private auth: AuthService,
    // Inject the router
    private router: Router,
    private tripApi: TripApi
  ) {}

  // Add a method to log out.
  logOut() {
    console.log('logging out...');
    this.auth.logOut();
    this.router.navigateByUrl('/login');
  }

  createTrip(): void {
    this.tripApi
      .createTrip$({
        title: 'Trip test',
        description: 'This is a trip test with additional data',
        startDate: Date.now().toString(),
        endDate: Date.now().toString(),
      })
      .subscribe((createdTrip) => {
        this.tripId = createdTrip.id;
        console.log(createdTrip);
      });
  }

  getTrip(): void {
    this.tripApi.getTrip$(this.tripId).subscribe(console.log);
  }
}
