import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EarthquakePageComponent } from './earthquake-page.component';
import {AppModule} from '../../app.module';

describe('EarthquakePageComponent', () => {
  let component: EarthquakePageComponent;
  let fixture: ComponentFixture<EarthquakePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppModule]
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
