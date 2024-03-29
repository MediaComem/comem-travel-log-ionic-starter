import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutPage } from './layout.page';

const routes: Routes = [
  {
    path: '',
    component: LayoutPage,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'trip-list',
      },
      {
        path: 'create-trip',
        loadChildren: () =>
          import('./create-trip/create-trip.module').then(
            (m) => m.CreateTripPageModule
          ),
      },
      {
        path: 'places-map',
        loadChildren: () =>
          import('./places-map/places-map.module').then(
            (m) => m.PlacesMapPageModule
          ),
      },
      {
        path: 'trip-list',
        loadChildren: () =>
          import('./trip-list/trip-list.module').then(
            (m) => m.TripListPageModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutPageRoutingModule {}
