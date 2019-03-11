import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JsTechniquesComponent } from './js-techniques.component';

describe('JsTechniquesComponent', () => {
  let component: JsTechniquesComponent;
  let fixture: ComponentFixture<JsTechniquesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JsTechniquesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JsTechniquesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
