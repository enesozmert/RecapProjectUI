import { CustomerService } from './../../services/customer.service';
import { RentalFakeService } from './../../services/rental-fake.service';
import { ToastrService } from 'ngx-toastr';
import { CarDetailDto } from './../../models/dtos/carDetailDto';
import { CarImageDetailDtoService } from './../../services/car-image-detail-dto.service';
import { RentalService } from './../../services/rental.service';
import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { CartItem } from 'src/app/models/entities/cartitem';
import { CarImageDetailDto } from 'src/app/models/dtos/carImageDetailDto';
import { Router } from '@angular/router';
import { Rental } from 'src/app/models/entities/rental';
import { Customer } from 'src/app/models/entities/customer';
import { ConfirmationService } from 'primeng/api';
import { FormArray, Validators, FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-rent-acar',
  templateUrl: './rent-acar.component.html',
  styleUrls: ['./rent-acar.component.css'],
  providers: [ConfirmationService]
})
export class RentACarComponent implements OnInit {
  rentDateNumber:number=0;
  returnDateNumber:number=0;
  customerIDnumber:number=0;
  rentalFormGroup:FormGroup;
  rental: Rental;
  customerId: number;
  customers: Customer[];
  cartItems: CartItem[] = [];
  carImageDetailDtos: CarImageDetailDto[] = []
  responsiveOptions: any;
  carImageId: number;
  carImagePath: string;
  dataLoaded: boolean = false
  dateTouch: Date;
  dates: Date[];
  rangeDates: Date[];
  minDate: Date;
  maxDate: Date;
  es: any;
  invalidDates: Array<Date>;
  position: string;

  
  constructor(private rentalService: RentalService,
    private cartService: CartService,
    private carImageDetailDtoService: CarImageDetailDtoService,
    private router: Router,
    private toastrService: ToastrService,
    private rentalFakeService: RentalFakeService,
    private customerService: CustomerService,
    private confirmationService:ConfirmationService,
    private formBuilder:FormBuilder) {
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3
      },
      {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2
      },
      {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1
      }
    ];
  }
  ngOnInit(): void {
    this.getCart()
    this.getCustomers()
    this.createCustomerddForm();
    // for (let index = 0; index < this.cartItems.length-1; index++) {
    //  this.addcustomerID();
    //  this.addrentDate();
    //  this.addreturnDate();  
    // }
  }
  createCustomerddForm() {
    this.rentalFormGroup = this.formBuilder.group({
      returnDate: this.formBuilder.array([
        this.formBuilder.control('')
      ]),
      rentDate: this.formBuilder.array([
        this.formBuilder.control('')
      ]),
      customerID: this.formBuilder.array([
        this.formBuilder.control('')
      ])
    });
  }
  getCart() {
    this.cartItems = this.cartService.list();
  }
  getCarImages(carId: number) {
    return this.carImageDetailDtoService.getCarImageView(carId);
  }
  getCarImageDetail(carId: number) {
    this.carImageDetailDtoService.getCarImageDetailDto(carId).subscribe(response => {
      this.carImageDetailDtos = response.data
    })
  }
  getCustomers() {
    this.customerService.getCustomers().subscribe(respoonse => {
      this.customers = respoonse.data;
    })
  }
  addrentDate() {
    this.rentDate.push(this.formBuilder.control(''));
    this.rentDateNumber++;
    return this.rentDate.value;
  }
  get rentDate() {
    return this.rentalFormGroup.get('rentDate') as FormArray;
  }
  ///
  addreturnDate() {
    this.returnDate.push(this.formBuilder.control(''));
    this.returnDateNumber++;
    return this.returnDate.value;
  }
  get returnDate() {
    return this.rentalFormGroup.get('returnDate') as FormArray;
  }
  ///
  addcustomerID() {
    this.customerID.push(this.formBuilder.control(''));
    this.customerIDnumber++;
    return this.customerID.value;
  }
  get customerID() {
    return this.rentalFormGroup.get('customerID') as FormArray;
  }
  fakerentDetail() {
  for (let index = 0; index < this.cartItems.length-1; index++) {
     this.addcustomerID();
     this.addrentDate();
     this.addreturnDate();  
    }
      console.log(this.rentalFormGroup.value);
    // if (this.rentalFormGroup.valid) {
    //   let productModel:Rental = Object.assign({}, this.rentalAddForm.value)
    //   this.cartItems.forEach(element => {
    //     //this.rental.carID = element.carDetailDto.id
    //     //this.rentalFakeService.addToCart(productModel);
    //     console.log(this.rental);
    //   });
    //   this.toastrService.success("Sepet Detaylarına gidiyoruz.")
    //   //this.router.navigate(['/cartdetail'])
    // } else {
    //   this.toastrService.error("Form Error Is Invalid!", "Error")
    // }
  }
  confirmPosition(position: string) {
    this.position = position;

    this.confirmationService.confirm({
      message: 'Do you want to delete this record?',
      header: 'Delete Confirmation',
      icon: 'pi pi-info-circle',
      accept: () => {
        this.fakerentDetail()
        this.toastrService.success("Success", "Confirmed");
      },
      reject: () => {
        this.toastrService.error("Error", "Not Confirmed");
      },
      key: "positionDialog"
    });
  }
}
