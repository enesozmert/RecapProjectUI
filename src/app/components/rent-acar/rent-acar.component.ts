import { RentalItem } from './../../models/entities/rentalItem';
import { CarimageComponent } from './../carimage/carimage.component';
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
  rental: Rental;
  rentals:Rental[];
  customerId: number;
  customers: Customer[];
  cartItems: CartItem[] = [];
  rentalItems:RentalItem[]
  carImageDetailDtos: CarImageDetailDto[] = []
  responsiveOptions: any;
  carImageId: number;
  carImagePath: string;
  dataLoaded: boolean = false
  position: string;
  constructor(private rentalService: RentalService,
    private cartService: CartService,
    private carImageDetailDtoService: CarImageDetailDtoService,
    private router: Router,
    private toastrService: ToastrService,
    private rentalFakeService: RentalFakeService,
    private customerService: CustomerService,
    private confirmationService: ConfirmationService,
    private formBuilder: FormBuilder) {
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
  getFakeRentDetail(){
   return this.rentalItems=this.rentalFakeService.list();
  }
  setFakeRentDetail(fakeRental:Rental){
    this.rentalFakeService.addToCart(fakeRental);
  }
  fakerentDetail(event:any) {
    this.setFakeRentDetail(event)
    //console.log(event)
  }
  confirmPosition(position: string) {
    this.position = position;
    this.getFakeRentDetail();
    this.confirmationService.confirm({
      message: 'Do you want to delete this record?',
      header: 'Delete Confirmation',
      icon: 'pi pi-info-circle',
      accept: () => {
        if (this.getFakeRentDetail().length>0) {
          this.router.navigate(['/cartdetail'])
          this.toastrService.success("Success", "Confirmed");
        }  
      },
      reject: () => {
        this.toastrService.error("Error", "Not Confirmed");
      },
      key: "positionDialog"
    });
  }
}
