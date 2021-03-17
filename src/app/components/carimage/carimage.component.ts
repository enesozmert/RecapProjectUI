import { element } from 'protractor';
import { CarImageDetailDtoService } from './../../services/car-image-detail-dto.service';
import { CarImageDetailDto } from './../../models/dtos/carImageDetailDto';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-carimage',
  templateUrl: './carimage.component.html',
  styleUrls: ['./carimage.component.css']
})
export class CarimageComponent implements OnInit {
  carImageDetailDto: CarImageDetailDto[] = []
  activeState: boolean[] = [];
  images:any[]
  dataLoaded: boolean = false
  carImageId: number;
  carImagePath: string;
  first = 0;
  rows = 10;
  constructor(private carImageDetailDtoService: CarImageDetailDtoService,
    private activatedRoute: ActivatedRoute,
    private domSanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params["carId"]) {
        this.getCarImageDetail(params["carId"])
        console.log(params["carId"])
      }
    })
    this.activeState = [false, false]
   
  }
  getCarImageDetail(carId: number) {
    this.carImageDetailDtoService.getCarImageDetailDto(carId).subscribe(response => {
      this.carImageDetailDto = response.data
      response.data.forEach(element => {
        this.carImageId = element.id
        this.getCarImageView(this.carImageId);
      });
      this.dataLoaded = true
    })
  }
  getCarImageView(carImageId: number) {
    
    this.carImagePath= this.carImageDetailDtoService.getCarImageView(carImageId);
  }
  getUrl(){
    return this.domSanitizer.bypassSecurityTrustResourceUrl(this.carImagePath);
  }
  toggle(index: number) {
    this.activeState[index] = !this.activeState[index];
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
