import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { HomePage } from './home.page';

// TODO: move the routes declaration outside the NgModule declaration
const routes: Routes = [
  {
    path: '', component: HomePage, children: [
      { path: '', redirectTo: 'map'}, // This defines the default tab
      {
        path: 'new',
        loadChildren: () => import('./create-trip/create-trip.module').then(m => m.CreateTripPageModule)
      },
      {
        path: 'map',
        loadChildren: () => import('./places-map/places-map.module').then(m => m.PlacesMapPageModule)
      },
      {
        path: 'list',
        loadChildren: () => import('./trip-list/trip-list.module').then(m => m.TripListPageModule)
      },
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes) // TODO: configure the router with the above constant
  ],
  declarations: [ HomePage ]
})
export class HomePageModule { }
