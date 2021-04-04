import { Injectable } from '@angular/core';
import { Rental } from '../models/entities/rental';
import { RentalItem } from '../models/entities/rentalItem';
import { RentalItemList } from '../models/entities/rentalItemList';

@Injectable({
  providedIn: 'root'
})
export class RentalFakeService {

  constructor() { }
  addToCart(rental:Rental){
    let item = RentalItemList.find(c=>c.rental.id===rental.id);
    if(item){
      item.quantity+=1;
    }else{
      let rentalItem = new RentalItem();
      rentalItem.rental = rental;
      rentalItem.quantity =1;
      RentalItemList.push(rentalItem)
    }
  }
  removeFromCart(rental:Rental){
    let item:RentalItem = RentalItemList.find(c=>c.rental.id===rental.id);
    RentalItemList.splice(RentalItemList.indexOf(item),1);
  }

  list():RentalItem[]{
    return RentalItemList;
  }
  getById(id:number):RentalItem{
    let item:RentalItem = RentalItemList.find(c=>c.rental.carID===id);
    return item
  }
}
