import { TestBed } from '@angular/core/testing';

import { FindexService } from './findex.service';

describe('FindexService', () => {
  let service: FindexService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FindexService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
