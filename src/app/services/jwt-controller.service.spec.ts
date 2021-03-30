import { TestBed } from '@angular/core/testing';

import { JwtControllerService } from './jwt-controller.service';

describe('JwtControllerService', () => {
  let service: JwtControllerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JwtControllerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
