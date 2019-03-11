import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { GeoJSONTutorialComponent } from "./geo-json-tutorial.component";
import { AppModule } from "src/app/app.module";

describe("GeoJSONTutorialComponent", () => {
  let component: GeoJSONTutorialComponent;
  let fixture: ComponentFixture<GeoJSONTutorialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeoJSONTutorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
