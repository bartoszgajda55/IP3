import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { EarthquakeTutorialComponent } from "./earthquake-tutorial.component";
import { AppComponent } from "src/app/app.component";

describe("EarthquakeTutorialComponent", () => {
  let component: EarthquakeTutorialComponent;
  let fixture: ComponentFixture<EarthquakeTutorialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EarthquakeTutorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
