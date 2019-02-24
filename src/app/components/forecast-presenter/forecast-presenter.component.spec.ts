import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForecastPresenterComponent } from './forecast-presenter.component';

describe('ForecastPresenterComponent', () => {
  let component: ForecastPresenterComponent;
  let fixture: ComponentFixture<ForecastPresenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForecastPresenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForecastPresenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
