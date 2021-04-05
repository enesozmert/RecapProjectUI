import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentAcarChildComponent } from './rent-acar-child.component';

describe('RentAcarChildComponent', () => {
  let component: RentAcarChildComponent;
  let fixture: ComponentFixture<RentAcarChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RentAcarChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RentAcarChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
