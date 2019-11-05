import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-trip-list',
  templateUrl: './trip-list.page.html',
  styleUrls: [ './trip-list.page.scss' ],
})
export class TripListPage implements OnInit {

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
    const url = `${environment.apiUrl}/trips`;
    this.http.get(url).subscribe(trips => {
      console.log(`Trips loaded`, trips);
    });
  }

}
