import { TestBed } from '@angular/core/testing';

import { PersnalService } from './persnal.service';

describe('PersnalService', () => {
  let service: PersnalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersnalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
