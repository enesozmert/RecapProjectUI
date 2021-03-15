import { CustomerDetailDtoService } from './../../../services/customer-detail-dto.service';
import { RentalDetailDtoService } from './../../../services/rental-detail-dto.service';
import { Component, OnInit } from '@angular/core';
import { RentalDetailDto } from 'src/app/models/dtos/rentalDetailDto';

@Component({
  selector: 'app-rental-detail-dto',
  templateUrl: './rental-detail-dto.component.html',
  styleUrls: ['./rental-detail-dto.component.css']
})
export class RentalDetailDtoComponent implements OnInit {
  rentalDetailDtos: RentalDetailDto[] = []
  dataLoaded: boolean = false
  first = 0
  rows = 10
  constructor(private rentalDetailDtoService: RentalDetailDtoService) { }

  ngOnInit(): void {
    this.getRentalDetailDto()
  }
  getRentalDetailDto() {
    this.rentalDetailDtoService.getCarDetailDto().subscribe(response => {
      this.rentalDetailDtos = response.data
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
    return this.rentalDetailDtos ? this.first === (this.rentalDetailDtos.length - this.rows) : true;
  }

  isFirstPage(): boolean {
    return this.rentalDetailDtos ? this.first === 0 : true;
  }
}
