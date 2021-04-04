import { TestBed } from '@angular/core/testing';

import { RentalFakeService } from './rental-fake.service';

describe('RentalFakeService', () => {
  let service: RentalFakeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RentalFakeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
