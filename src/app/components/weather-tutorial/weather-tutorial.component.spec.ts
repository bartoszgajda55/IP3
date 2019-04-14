import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherTutorialComponent } from './weather-tutorial.component';

describe('WeatherTutorialComponent', () => {
  let component: WeatherTutorialComponent;
  let fixture: ComponentFixture<WeatherTutorialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherTutorialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherTutorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
