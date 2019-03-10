import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { VisualizationPageComponent } from "./visualization-page.component";
import { AppModule } from "src/app/app.module";

describe("VisualizationPageComponent", () => {
  let component: VisualizationPageComponent;
  let fixture: ComponentFixture<VisualizationPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualizationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
