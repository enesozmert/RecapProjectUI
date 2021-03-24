import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/services/cart.service';
import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/models/entities/cartitem';
import { ConfirmationService } from 'primeng/api';
@Component({
  selector: 'app-cart-detail',
  templateUrl: './cart-detail.component.html',
  styleUrls: ['./cart-detail.component.css'],
  providers: [ConfirmationService]
})
export class CartDetailComponent implements OnInit {
  cartItems: CartItem[] = []
  paymentRouteLink: string = ""
  constructor(private cartService: CartService,
    private confirmationService: ConfirmationService,
    private toastrService: ToastrService) { }

  ngOnInit(): void {
    this.getCart()
  }
  getCart() {
    this.cartItems = this.cartService.list();
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
