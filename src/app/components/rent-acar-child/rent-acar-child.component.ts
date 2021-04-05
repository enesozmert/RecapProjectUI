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
  dataLoaded: boolean = false
  outputRental: Rental
  outputClass:string=""
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
    private fakeRentalService:RentalFakeService) { }
  ngOnInit(): void {
    this.getCarDetailDto(this.carId);
    this.createRentACarChilFrom()
    this.getCustomers();
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
  output() {
    if (this.rentACarChilForm.valid) {
      this.outputRental = Object.assign({}, this.rentACarChilForm.value);
      this.outputRental.carID = this.carId;
      this.valueChange.emit(this.outputRental);
      this.outputClass=" disabled";
    }
  }
}
