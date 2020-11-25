import { TestBed } from '@angular/core/testing';

import { CourtCountService } from './court-count.service';

describe('CourtCountService', () => {
  let service: CourtCountService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CourtCountService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
