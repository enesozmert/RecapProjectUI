import { CustomerDetailDtoService } from './../../../services/customer-detail-dto.service';
import { CustomerDetailDto } from './../../../models/dtos/customerDetailDto';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-detail-dto',
  templateUrl: './customer-detail-dto.component.html',
  styleUrls: ['./customer-detail-dto.component.css']
})
export class CustomerDetailDtoComponent implements OnInit {
  customerDetailDtos: CustomerDetailDto[] = []
  dataLoaded: boolean = false
  first = 0
  rows = 10
  constructor(private customerDetailDtoService: CustomerDetailDtoService) { }

  ngOnInit(): void {
    this.getCustomerDetailDtos()
  }
  getCustomerDetailDtos() {
    this.customerDetailDtoService.getCarDetailDto().subscribe(response => {
      this.customerDetailDtos = response.data
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
    return this.customerDetailDtos ? this.first === (this.customerDetailDtos.length - this.rows) : true;
  }

  isFirstPage(): boolean {
    return this.customerDetailDtos ? this.first === 0 : true;
  }
}


