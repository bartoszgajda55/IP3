import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { WeatherPageComponent } from "./weather-page.component";
import { AppModule } from "src/app/app.module";

describe("WeatherPageComponent", () => {
  let component: WeatherPageComponent;
  let fixture: ComponentFixture<WeatherPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should initialize the zoom field with 12", () => {
    expect(component.zoom).toEqual(12);
  });

  it("should initialize lat field with 55.873543", () => {
    expect(component.lat).toEqual(55.873543);
  });

  it("should initialize lng field with -4.289058", () => {
    expect(component.lng).toEqual(-4.289058);
  });

  it("should initialize currentLocationName field with Glasgow, UK", () => {
    expect(component.currentLocationName).toEqual("Glasgow, UK");
  });
});
