import { TestBed, inject } from '@angular/core/testing';

import { GcodsService } from './gcods.service';

describe('GcodsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GcodsService]
    });
  });

  it('should be created', inject([GcodsService], (service: GcodsService) => {
    expect(service).toBeTruthy();
  }));
});
