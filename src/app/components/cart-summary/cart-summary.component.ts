import { CarDetailDto } from './../../models/dtos/carDetailDto';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/services/cart.service';
import { CartItem } from 'src/app/models/entities/cartitem';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.css']
})
export class CartSummaryComponent implements OnInit {

  cartItems: CartItem[]=[];

  constructor(private cartService: CartService, private toastrService:ToastrService) {}

  ngOnInit(): void {
    this.getCart();
  }

  getCart() {
    this.cartItems = this.cartService.list();
  }

  removeFromCart(carDetailDto:CarDetailDto){
    this.cartService.removeFromCart(carDetailDto);
    this.toastrService.error("Silindi",carDetailDto.brandName+" "+carDetailDto.modelYear + " sepetten silindi.")
  }

}
