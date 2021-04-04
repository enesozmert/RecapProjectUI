import { CarDetailDto } from './../models/dtos/carDetailDto';
import { Injectable } from '@angular/core';
import { CartItems } from '../models/entities/cartItems';
import { CartItem } from '../models/entities/cartitem';
import { Rental } from '../models/entities/rental';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  addToCart(carDetailDto:CarDetailDto){
    let item = CartItems.find(c=>c.carDetailDto.id===carDetailDto.id);
    if(item){
      item.quantity+=1;
    }else{
      let cartItem = new CartItem();
      cartItem.carDetailDto = carDetailDto;
      cartItem.quantity =1;
      CartItems.push(cartItem)
    }
  }
  removeFromCart(carDetailDto:CarDetailDto){
    let item:CartItem = CartItems.find(c=>c.carDetailDto.id===carDetailDto.id);
    CartItems.splice(CartItems.indexOf(item),1);
  }

  list():CartItem[]{
    return CartItems;
  }
}
