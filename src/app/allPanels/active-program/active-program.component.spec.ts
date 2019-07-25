import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveProgramComponent } from './active-program.component';

describe('ActiveProgramComponent', () => {
  let component: ActiveProgramComponent;
  let fixture: ComponentFixture<ActiveProgramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActiveProgramComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
