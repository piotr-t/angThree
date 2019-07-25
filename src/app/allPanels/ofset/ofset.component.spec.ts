import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfsetComponent } from './ofset.component';

describe('OfsetComponent', () => {
  let component: OfsetComponent;
  let fixture: ComponentFixture<OfsetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfsetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfsetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
