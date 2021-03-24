import { CarDetailDto } from './../../models/dtos/carDetailDto';
import { CarImageDetailDtoService } from './../../services/car-image-detail-dto.service';
import { RentalService } from './../../services/rental.service';
import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { CartItem } from 'src/app/models/entities/cartitem';
import { CarImageDetailDto } from 'src/app/models/dtos/carImageDetailDto';

@Component({
  selector: 'app-rent-acar',
  templateUrl: './rent-acar.component.html',
  styleUrls: ['./rent-acar.component.css']
})
export class RentACarComponent implements OnInit {
  cartItems: CartItem[]=[];
  carImageDetailDtos: CarImageDetailDto[] = []
  responsiveOptions:any;
  carImageId: number;
  carImagePath: string;
  dataLoaded: boolean = false
  constructor(private rentalService:RentalService,
    private cartService: CartService,
    private carImageDetailDtoService:CarImageDetailDtoService) {
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
    
  }
  getCart() {
    this.cartItems = this.cartService.list();
  }
  getCarImages(carId:number) {
    return this.carImageDetailDtoService.getCarImageView(carId);
  }
  getCarImageDetail(carId: number) {
    this.carImageDetailDtoService.getCarImageDetailDto(carId).subscribe(response => {
      this.carImageDetailDtos = response.data
    })
  }
}
