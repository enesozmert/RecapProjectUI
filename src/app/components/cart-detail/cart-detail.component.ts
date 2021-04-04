import { RentalFakeService } from './../../services/rental-fake.service';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/services/cart.service';
import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/models/entities/cartitem';
import { ConfirmationService } from 'primeng/api';
import { Rental } from 'src/app/models/entities/rental';
import { RentalItem } from 'src/app/models/entities/rentalItem';
@Component({
  selector: 'app-cart-detail',
  templateUrl: './cart-detail.component.html',
  styleUrls: ['./cart-detail.component.css'],
  providers: [ConfirmationService]
})
export class CartDetailComponent implements OnInit {
  cartItems: CartItem[] = []
  rentalItemList: RentalItem[]
  rentalItem:RentalItem
  paymentRouteLink: string = ""
  constructor(private cartService: CartService,
    private confirmationService: ConfirmationService,
    private toastrService: ToastrService,
    private rentalFakeService: RentalFakeService) { }

  ngOnInit(): void {
    this.getCart()
  }
  getCart() {
    this.cartItems = this.cartService.list();
  }
  getFakeRental() {
    this.rentalItemList = this.rentalFakeService.list();
  }
  getFakeRentalById(id:number){
    this.rentalItem= this.rentalFakeService.getById(id);
  }
  confirm(event: Event) {
    this.confirmationService.confirm({
      target: event.target,
      message: 'Are you sure that you want to proceed?',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.toastrService.success('I Confirm', 'Success');
        this.paymentRouteLink = "/payment"
      },
      reject: () => {
        this.toastrService.error('I not Confirm', 'Error');
        this.paymentRouteLink = "/"
      }
    });
  }
  setPaymentRouteLink(): any {
    if (this.paymentRouteLink === "/" || this.paymentRouteLink === "") {

    } else {
      return this.paymentRouteLink;
    }
  }
}
