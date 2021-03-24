import { Component, OnInit } from '@angular/core';
import { CarDetailDto } from 'src/app/models/dtos/carDetailDto';
import { CarDetailDtoService } from 'src/app/services/car-detail-dto.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
  carDetailDtos: CarDetailDto[] = []
  dataLoaded: boolean = false
  constructor(private carDetailDtoService:CarDetailDtoService) { }

  ngOnInit(): void {
    this.getCarDetailDto()
  }
  getCarDetailDto() {
    this.carDetailDtoService.getCarDetailDto().subscribe(response => {
      this.carDetailDtos = response.data
      this.dataLoaded = true;
      //console.log(this.carDetailDtos)
    })
  }
}
