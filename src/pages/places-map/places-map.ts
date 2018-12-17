import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { latLng, MapOptions, tileLayer, Marker, marker, Map } from 'leaflet';

/**
 * Generated class for the PlacesMapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-places-map',
  templateUrl: 'places-map.html',
})
export class PlacesMapPage {

  map: Map;
  mapOptions: MapOptions;
  mapMarkers: Marker[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    const tileLayerUrl = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
    const tileLayerOptions = { maxZoom: 18 };
    this.mapOptions = {
      layers: [
        tileLayer(tileLayerUrl, tileLayerOptions)
      ],
      zoom: 13,
      center: latLng(46.778186, 6.641524)
    };

    this.mapMarkers = [
      marker([ 46.778186, 6.641524 ]).bindTooltip('Hello'),
      marker([ 46.780796, 6.647395 ]),
      marker([ 46.784992, 6.652267 ])
    ];
  }

  onMapReady(map: Map) {
    this.map = map;
    this.map.on('moveend', () => {
      const center = this.map.getCenter();
      console.log(`Map moved to ${center.lng}, ${center.lat}`);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PlacesMapPage');
  }

}
