import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EarthquakePageComponent } from './earthquake-page.component';

describe('EarthquakePageComponent', () => {
  let component: EarthquakePageComponent;
  let fixture: ComponentFixture<EarthquakePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EarthquakePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EarthquakePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
