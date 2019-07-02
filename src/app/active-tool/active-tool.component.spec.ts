import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveToolComponent } from './active-tool.component';

describe('ActiveToolComponent', () => {
  let component: ActiveToolComponent;
  let fixture: ComponentFixture<ActiveToolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActiveToolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
