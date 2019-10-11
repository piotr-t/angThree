import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZeroRetComponent } from './zero-ret.component';

describe('ZeroRetComponent', () => {
  let component: ZeroRetComponent;
  let fixture: ComponentFixture<ZeroRetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZeroRetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZeroRetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
