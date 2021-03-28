import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarDetailDtoAddComponent } from './car-detail-dto-add.component';

describe('CarDetailDtoAddComponent', () => {
  let component: CarDetailDtoAddComponent;
  let fixture: ComponentFixture<CarDetailDtoAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarDetailDtoAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarDetailDtoAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
