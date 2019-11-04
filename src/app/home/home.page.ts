import { Component } from '@angular/core';

// TODO: add an interface to represent a tab.
export interface HomePageTab {
  title: string; // The displayed title of your tab
  icon: string; // The icon for a tab
  path: string; // The route's path displays the tab
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  tabs: HomePageTab[];

  constructor() {
    this.tabs = [
      { title: 'New Trip', icon: 'add', path: 'new' },
      { title: 'Places Map', icon: 'map', path: 'map'},
      { title: 'Trip List', icon: 'list', path: 'list'}
    ];
  }

}
