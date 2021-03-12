import { CarDetailDtoService } from './../../../services/car-detail-dto.service';
import { Component, OnInit } from '@angular/core';
import { CarDetailDto } from 'src/app/models/dtos/carDetailDto';

@Component({
  selector: 'app-car-detail-dto',
  templateUrl: './car-detail-dto.component.html',
  styleUrls: ['./car-detail-dto.component.css']
})
export class CarDetailDtoComponent implements OnInit {
  carDetailDtos: CarDetailDto[] = []
  dataLoaded:boolean = false
  constructor(private carDetailDtoService: CarDetailDtoService) { }

  ngOnInit(): void {
    this.getCarDetailDtos()
  }
  getCarDetailDtos() {
    this.carDetailDtoService.getCarDetailDto().subscribe(response => {
      this.carDetailDtos = response.data
      this.dataLoaded = true
    })
  }
}
