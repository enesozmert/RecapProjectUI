import { CarDetailDtoService } from './../../services/car-detail-dto.service';
import { BrandService } from './../../services/brand.service';
import { ColorService } from './../../services/color.service';
import { Component, OnInit } from '@angular/core';
import { Color } from 'src/app/models/entities/color';
import { Brand } from 'src/app/models/entities/brand';
import { CarDetailDto } from 'src/app/models/dtos/carDetailDto';

@Component({
  selector: 'app-car-filter',
  templateUrl: './car-filter.component.html',
  styleUrls: ['./car-filter.component.css']
})
export class CarFilterComponent implements OnInit {
  colors: Color[] = []
  brands: Brand[] = []
  carDetailDto:CarDetailDto[]=[]
  dataLoaded: boolean = false
  constructor(private colorService: ColorService, private brandService: BrandService, private carDetailDtoService: CarDetailDtoService) { }

  ngOnInit(): void {
  }
  getAllColor() {
    this.colorService.getColors().subscribe(response => {
      this.colors = response.data
      this.dataLoaded = true
    })
  }
  getAllBrand() {
    this.brandService.getBrands().subscribe(response => {
      this.brands = response.data
      this.dataLoaded = true
    })
  }
  getFilterBtn(colorId: number, brandId: number) {
    this.carDetailDtoService.getCarDetailsByColorAndBrandId(colorId, brandId).subscribe(response => {
      this.carDetailDto = response.data
      this.dataLoaded = true
    })
  }
}
