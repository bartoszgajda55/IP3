import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ForecastPresenterComponent } from "./forecast-presenter.component";
import { AppModule } from "src/app/app.module";

describe("ForecastPresenterComponent", () => {
  let component: ForecastPresenterComponent;
  let fixture: ComponentFixture<ForecastPresenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForecastPresenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
