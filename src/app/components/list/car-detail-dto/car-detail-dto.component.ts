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
  dataLoaded: boolean = false
  first = 0;
  rows = 10;
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
}
