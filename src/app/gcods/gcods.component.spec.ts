import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GcodsComponent } from './gcods.component';

describe('GcodsComponent', () => {
  let component: GcodsComponent;
  let fixture: ComponentFixture<GcodsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GcodsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GcodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
