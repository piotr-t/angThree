import { TestBed, inject } from '@angular/core/testing';

import { MoveCodeService } from './move-code.service';

describe('MoveCodeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MoveCodeService]
    });
  });

  it('should be created', inject([MoveCodeService], (service: MoveCodeService) => {
    expect(service).toBeTruthy();
  }));
});
