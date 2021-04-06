import { ToastrService } from 'ngx-toastr';
import { AuthService } from './../../services/auth.service';
import { CreditCartService } from './../../services/credit-cart.service';
import { CreditCard } from './../../models/entities/creditCard';
import { CarDetailDto } from './../../models/dtos/carDetailDto';
import { CarDetailDtoService } from 'src/app/services/car-detail-dto.service';
import { RentalFakeService } from './../../services/rental-fake.service';
import { Component, OnInit } from '@angular/core';
import { RentalItem } from 'src/app/models/entities/rentalItem';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Guid } from 'src/app/Utilities/guid';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  totalPaymentNumber: number = 0;
  userId: number = 0;
  checked: boolean = false;
  creditCard: CreditCard;
  creditCards: CreditCard[];
  carDetailDtos: CarDetailDto[];
  rentalItems: RentalItem[];
  paymentForm: FormGroup;
  constructor(private rentalFakeService: RentalFakeService,
    private carDetailDtoService: CarDetailDtoService,
    private formBuilder: FormBuilder,
    private creditCardService: CreditCartService,
    private authService: AuthService,
    private toastrService: ToastrService,
    private router: Router) { }

  ngOnInit(): void {
    this.getFakeRental()
    this.carDetailDtos = []
    this.rentalItems.forEach(element => {
      this.getCarDetail(element.rental.carID)
    });
  }
  createPaymentFrom() {
    this.paymentForm = this.formBuilder.group({
      "cardName": ["", Validators.required],
      "cardNumber": ["", Validators.required],
      "expiration": ["", Validators.required],
      "cvv": ["", Validators.required],
    })
  }
  getUserId(): number {

    return this.userId
  }
  getFakeRental() {
    this.rentalItems = this.rentalFakeService.list();
    console.log(this.rentalFakeService.list())
  }
  getCarDetail(carId: number) {
    this.carDetailDtoService.getCarDetailDtoByCarId(carId).subscribe(response => {
      this.carDetailDtos.push(response.data);
      this.totalPayment(response.data.dailyPrice);
    })
  }
  totalPayment(dailPrice: number): number {
    this.totalPaymentNumber += dailPrice
    return this.totalPaymentNumber
  }
  getCreditCardByUserId(userId: number) {
    this.creditCardService.getCreditCardsByUserId(userId).subscribe(response => {
      this.creditCards = response.data
    })
  }
  addCreditCard() {
    if (this.paymentForm.valid) {
      let creditCartModel: CreditCard = Object.assign({}, this.paymentForm.value);
      creditCartModel.guid = Guid.newGuid();
      creditCartModel.date = new Date();
      if (this.checked == true) {
        this.creditCardService.add(creditCartModel).subscribe(response => {
          this.toastrService.success("CreditCard Added", response.message);
        },responseError=>{
          this.toastrService.success("CreditCard Not Added", responseError.error.message);
        })
      }
    }
  }
  isRented() {

  }
}
