import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

import { config } from '../../app/config';

/**
 * Generated class for the TripListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-trip-list',
  templateUrl: 'trip-list.html',
})
export class TripListPage {

  constructor(public http: HttpClient, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TripListPage');

    const url = config.apiUrl + '/trips';
    this.http.get(url).subscribe(trips => {
      console.log(`Trips loaded`, trips);
    });
  }

}
