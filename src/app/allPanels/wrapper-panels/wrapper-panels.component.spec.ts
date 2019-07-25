import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WrapperPanelsComponent } from './wrapper-panels.component';

describe('WrapperPanelsComponent', () => {
  let component: WrapperPanelsComponent;
  let fixture: ComponentFixture<WrapperPanelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WrapperPanelsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperPanelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
