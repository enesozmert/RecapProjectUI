import { RentalService } from './../../services/rental.service';
import { RentalDetailDto } from 'src/app/models/dtos/rentalDetailDto';
import { RentalDetailDtoService } from './../../services/rental-detail-dto.service';
import { CartService } from 'src/app/services/cart.service';
import { ToastrService } from 'ngx-toastr';
import { CarDetailDtoService } from './../../services/car-detail-dto.service';
import { Component, OnInit, Input } from '@angular/core';
import { CarDetailDto } from 'src/app/models/dtos/carDetailDto';
import { Rental } from 'src/app/models/entities/rental';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  carDetailDtos: CarDetailDto[] = []
  carDetailDto: CarDetailDto
  rental: Rental;
  dataLoaded: boolean = false
  addToCartClass:string="btn btn-primary"
  @Input() carId: number

  constructor(private carDetailDtoService: CarDetailDtoService,
    private toastrService: ToastrService,
    private cartService: CartService,
    private rentalDetailDtoService: RentalDetailDtoService,
    private rentalService:RentalService) { }

  ngOnInit(): void {
    this.getCarDetailDtoById(this.carId)
    this.isForRent(this.carId)
  }
  getCarDetailDtoById(carId: number) {
    this.carDetailDtoService.getCarDetailDtoById(carId).subscribe(response => {
      this.carDetailDtos = response.data
      this.dataLoaded = true;
      //console.log(this.carDetailDtos)
      this.carDetailDto = Object.assign(this.carDetailDtos);
     // console.log(Object.assign(this.carDetailDtos))
    })
  }
  addToCart(carDetailDto: CarDetailDto) {
    this.toastrService.success("Sepete eklendi", carDetailDto.brandName + " " + carDetailDto.modelYear)
    this.cartService.addToCart(carDetailDto);
  }
  isForRent(carId: number) {
    this.rentalService.isForRent(carId).subscribe(response => {
      if (response.data==true) {
        this.addToCartClass = "btn btn-primary"
      }else if(response.data==false){
        this.addToCartClass = "btn btn-primary disabled"
      } 
    })
  }
}
