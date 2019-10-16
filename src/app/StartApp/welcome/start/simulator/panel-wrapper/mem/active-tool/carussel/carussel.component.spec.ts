import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarusselComponent } from './carussel.component';

describe('CarusselComponent', () => {
  let component: CarusselComponent;
  let fixture: ComponentFixture<CarusselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarusselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarusselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
