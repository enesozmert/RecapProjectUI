import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarImageGalleryComponent } from './car-image-gallery.component';

describe('CarImageGalleryComponent', () => {
  let component: CarImageGalleryComponent;
  let fixture: ComponentFixture<CarImageGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarImageGalleryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarImageGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
