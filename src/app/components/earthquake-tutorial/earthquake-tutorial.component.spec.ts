import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EarthquakeTutorialComponent } from './earthquake-tutorial.component';

describe('EarthquakeTutorialComponent', () => {
  let component: EarthquakeTutorialComponent;
  let fixture: ComponentFixture<EarthquakeTutorialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EarthquakeTutorialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EarthquakeTutorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
