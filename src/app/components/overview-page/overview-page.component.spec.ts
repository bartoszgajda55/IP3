import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { OverviewPageComponent } from "./overview-page.component";
import { AppModule } from "src/app/app.module";

describe("OverviewPageComponent", () => {
  let component: OverviewPageComponent;
  let fixture: ComponentFixture<OverviewPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverviewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
