import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApptextareaComponent } from './apptextarea.component';

describe('ApptextareaComponent', () => {
  let component: ApptextareaComponent;
  let fixture: ComponentFixture<ApptextareaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApptextareaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApptextareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
