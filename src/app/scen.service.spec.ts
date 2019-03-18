import { TestBed, inject } from '@angular/core/testing';

import { ScenService } from './scen.service';

describe('ScenService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ScenService]
    });
  });

  it('should be created', inject([ScenService], (service: ScenService) => {
    expect(service).toBeTruthy();
  }));
});
