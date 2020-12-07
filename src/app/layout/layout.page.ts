import { Component } from "@angular/core";

export interface PageTab {
  title: string;
  icon: string;
  path: string;
}

@Component({
  selector: "app-layout",
  templateUrl: "./layout.page.html",
  styleUrls: ["./layout.page.scss"],
})
export class LayoutPage {
  tabs: PageTab[];

  constructor() {
    this.tabs = [
      { title: "New Trip", icon: "add", path: "create-trip" },
      { title: "Places Map", icon: "map", path: "places-map" },
      { title: "Trip List", icon: "list", path: "trip-list" },
    ];
  }
}
