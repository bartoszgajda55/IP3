import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { AppModule } from "src/app/app.module";
import { WeatherTutorialComponent } from "./weather-tutorial.component";

describe("WeatherTutorialComponent", () => {
  let component: WeatherTutorialComponent;
  let fixture: ComponentFixture<WeatherTutorialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherTutorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
