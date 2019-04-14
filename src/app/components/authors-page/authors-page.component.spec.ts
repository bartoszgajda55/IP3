import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { AuthorsPageComponent } from "./authors-page.component";
import { AppModule } from "src/app/app.module";

describe("AuthorsPageComponent", () => {
  let component: AuthorsPageComponent;
  let fixture: ComponentFixture<AuthorsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
