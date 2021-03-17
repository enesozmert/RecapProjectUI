import { TestBed } from '@angular/core/testing';

import { CarImageDetailDtoService } from './car-image-detail-dto.service';

describe('CarImageDetailDtoService', () => {
  let service: CarImageDetailDtoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarImageDetailDtoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
