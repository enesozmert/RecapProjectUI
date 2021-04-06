import { FindexService } from './../../services/findex.service';
import { RentalService } from './../../services/rental.service';
import { ConfirmationService } from 'primeng/api';
import { ToastrService } from 'ngx-toastr';
import { CustomerService } from './../../services/customer.service';
import { CarDetailDto } from './../../models/dtos/carDetailDto';
import { CarDetailDtoService } from './../../services/car-detail-dto.service';
import { CarService } from './../../services/car.service';
import { RentalFakeService } from './../../services/rental-fake.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Customer } from 'src/app/models/entities/customer';
import { Rental } from 'src/app/models/entities/rental';

@Component({
  selector: 'app-rent-acar-child',
  templateUrl: './rent-acar-child.component.html',
  styleUrls: ['./rent-acar-child.component.css']
})
export class RentAcarChildComponent implements OnInit {
  rentACarChilForm: FormGroup;
  carDetailDto: CarDetailDto;
  customers: Customer[];
  carFindexStr: number;
  userFindexStr: number;
  dataLoaded: boolean = false
  outputRental: Rental
  outputClass: string = ""
  date1: Date;
  date2: Date;
  position: string;
  @Input() carId: number;
  @Output() valueChange = new EventEmitter();
  constructor(private rentalFakeService: RentalFakeService,
    private carDetailDtoService: CarDetailDtoService,
    private customerService: CustomerService,
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private confirmationService: ConfirmationService,
    private fakeRentalService: RentalFakeService,
    private rentalService: RentalService,
    private findexService: FindexService) { }
  ngOnInit(): void {
    this.getCarDetailDto(this.carId);
    this.createRentACarChilFrom()
    this.getCustomers();
    this.getCarFindex();
    this.getUserFindex();
  }
  createRentACarChilFrom() {
    this.rentACarChilForm = this.formBuilder.group({
      "rentDate": ["", Validators.required],
      "returnDate": ["", Validators.required],
      "customerID": ["", Validators.required]
    })
  }
  getCarDetailDto(carId: number) {
    this.carDetailDtoService.getCarDetailDtoByCarId(carId).subscribe(response => {
      this.carDetailDto = response.data
    })
  }
  setCarDetailDto(): CarDetailDto {
    return this.carDetailDto
  }
  getCustomers() {
    this.customerService.getCustomers().subscribe(respoonse => {
      this.customers = respoonse.data;
    })
  }
  isForRentCompany(rental: Rental): boolean {
    let result: boolean = false
    this.rentalService.isForRentCompany(rental).subscribe(response => {
      if (response.data) {
        this.toastrService.success("This vehicle of this brand can be rented.", "Rent A Car")
        result = true
      }
      this.toastrService.error("This vehicle of this brand can not be rented.", "Rent A Car")
      result = false
    })
    return result
  }
  getCarFindex() {
    this.findexService.getCarFindex().subscribe(response => {
      this.carFindexStr = response.data
      console.log(this.carFindexStr);
    })
  }
  getUserFindex() {
    this.findexService.getUserFindex().subscribe(response => {
      this.userFindexStr = response.data
      console.log(this.userFindexStr);
    })
  }
  isFindexInTheRangeOf(): boolean {
    if (Number(this.userFindexStr) > Number(this.carFindexStr) && Number(this.carFindexStr) != Number(this.userFindexStr)) {
      this.toastrService.success("Insufficient findex score.", "Rent A Car")
      return true
    }
    this.toastrService.error("Insufficient findex not score.", "Rent A Car")
    return false
  }
  output() {
    if (this.rentACarChilForm.valid) {
      this.outputRental = Object.assign({}, this.rentACarChilForm.value);
      this.outputRental.carID = this.carId;
      if (this.isFindexInTheRangeOf()) {
        this.valueChange.emit(this.outputRental);
      }
      this.outputClass = " disabled";
    }
  }
}
