import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacesMapPage } from './places-map.page';

describe('PlacesMapPage', () => {
  let component: PlacesMapPage;
  let fixture: ComponentFixture<PlacesMapPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlacesMapPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlacesMapPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
