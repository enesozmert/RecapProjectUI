import { Component, Input, OnInit } from '@angular/core';
import { inject } from '@angular/core/testing';
import { CarImageDetailDto } from 'src/app/models/dtos/carImageDetailDto';
import { CarImageDetailDtoService } from 'src/app/services/car-image-detail-dto.service';

@Component({
  selector: 'app-car-image-gallery',
  templateUrl: './car-image-gallery.component.html',
  styleUrls: ['./car-image-gallery.component.css']
})
export class CarImageGalleryComponent implements OnInit {
  carImageDetailDtos: CarImageDetailDto[] = []
  @Input() carId:number
  dataLoaded: boolean = false
  constructor(private carImageDetailDtoService: CarImageDetailDtoService) { }

  ngOnInit(): void {
    this.getCarImageDetail(this.carId)
  }
  getCarImageDetail(carId: number) {
    this.carImageDetailDtoService.getCarImageDetailDto(carId).subscribe(response => {
      this.carImageDetailDtos = response.data  
      this.dataLoaded = true
    })
  }
  getCarImages(carImageDetailDto: CarImageDetailDto) {
    
    return this.carImageDetailDtoService.getCarImageView(carImageDetailDto.id);
  }
  responsiveOptions:any[] = [
    {
        breakpoint: '1024px',
        numVisible: 5
    },
    {
        breakpoint: '768px',
        numVisible: 3
    },
    {
        breakpoint: '560px',
        numVisible: 1
    }
];
}
