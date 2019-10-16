import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveProgram1Component } from './active-program1.component';

describe('ActiveProgram1Component', () => {
  let component: ActiveProgram1Component;
  let fixture: ComponentFixture<ActiveProgram1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActiveProgram1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveProgram1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
