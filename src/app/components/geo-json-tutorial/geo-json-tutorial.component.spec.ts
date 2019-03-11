import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeoJSONTutorialComponent } from './geo-json-tutorial.component';

describe('GeoJSONTutorialComponent', () => {
  let component: GeoJSONTutorialComponent;
  let fixture: ComponentFixture<GeoJSONTutorialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeoJSONTutorialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeoJSONTutorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
