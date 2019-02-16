import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { AppModule } from "../../app.module";
import { SideNavComponent } from "./side-nav.component";

describe("SideNavComponent", () => {
  let component: SideNavComponent;
  let fixture: ComponentFixture<SideNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should have header title as specified in component", () => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const app = fixture.debugElement.componentInstance;
    expect(
      compiled.querySelector(".side-nav__header-title").textContent
    ).toEqual(app.title);
  });
});
