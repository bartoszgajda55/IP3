import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { WeatherPresenterComponent } from "./weather-presenter.component";
import { AppModule } from "src/app/app.module";

describe("WeatherPresenterComponent", () => {
  let component: WeatherPresenterComponent;
  let fixture: ComponentFixture<WeatherPresenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherPresenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // Have to fix that
  // it("should create", () => {
  //   expect(component).toBeTruthy();
  // });
});
