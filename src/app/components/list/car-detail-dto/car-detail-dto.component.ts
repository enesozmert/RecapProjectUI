import { CarDetailDtoService } from './../../../services/car-detail-dto.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDetailDto } from 'src/app/models/dtos/carDetailDto';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-car-detail-dto',
  templateUrl: './car-detail-dto.component.html',
  styleUrls: ['./car-detail-dto.component.css']
})
export class CarDetailDtoComponent implements OnInit {
  carDetailDtos: CarDetailDto[] = []
  searchFilter:string="";
  selectedCarDetailDto: CarDetailDto;
  selectedcolorName:string="";
  dataLoaded: boolean = false
  first = 0;
  rows = 10;
  constructor(private carDetailDtoService: CarDetailDtoService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params["colorId"]) {
        this.getCarDetailsByColor(params["colorId"])
      } else if (params["brandId"]) {
        this.getCarDetailsByBrand(params["brandId"])
        console.log(params["brandId"])
      } else {
        this.getCarDetailDtos()
      }
    })
  }
  getCarDetailDtos() {
    this.carDetailDtoService.getCarDetailDto().subscribe(response => {
      this.carDetailDtos = response.data
      this.dataLoaded = true
    })
  }
  getCarDetailsByColor(colorId: number) {
    this.carDetailDtoService.getCarDetailsByColorId(colorId).subscribe(response => {
      this.carDetailDtos = response.data
      this.dataLoaded = true;
    })
  }
  getCarDetailsByBrand(brandId: number) {
    this.carDetailDtoService.getCarDetailsByBrandId(brandId).subscribe(response => {
      this.carDetailDtos = response.data
      this.dataLoaded = true;
    })
  }
  next() {
    this.first = this.first + this.rows;
  }

  prev() {
    this.first = this.first - this.rows;
  }

  reset() {
    this.first = 0;
  }

  isLastPage(): boolean {
    return this.carDetailDtos ? this.first === (this.carDetailDtos.length - this.rows) : true;
  }

  isFirstPage(): boolean {
    return this.carDetailDtos ? this.first === 0 : true;
  }
  selectCarDetailDto(carDetailDto:CarDetailDto){
    console.log(carDetailDto.brandName)
  }
}
