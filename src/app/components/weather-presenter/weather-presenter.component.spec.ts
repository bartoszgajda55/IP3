import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherPresenterComponent } from './weather-presenter.component';

describe('WeatherPresenterComponent', () => {
  let component: WeatherPresenterComponent;
  let fixture: ComponentFixture<WeatherPresenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherPresenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherPresenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
