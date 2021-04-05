import { CarDetailDto } from './../../models/dtos/carDetailDto';
import { CarDetailDtoService } from 'src/app/services/car-detail-dto.service';
import { RentalFakeService } from './../../services/rental-fake.service';
import { Component, OnInit } from '@angular/core';
import { RentalItem } from 'src/app/models/entities/rentalItem';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  carDetailDtos:CarDetailDto[];
  rentalItems:RentalItem[];
  constructor(private rentalFakeService:RentalFakeService,
    private carDetailDtoService:CarDetailDtoService) { }

  ngOnInit(): void {
    this.getFakeRental()
    this.carDetailDtos=[]
    this.rentalItems.forEach(element => {
      this.getCarDetail(element.rental.carID)
    });
  }
  getFakeRental(){
    this.rentalItems=this.rentalFakeService.list();
    console.log(this.rentalFakeService.list())
    
  }
  getCarDetail(carId:number){
    this.carDetailDtoService.getCarDetailDtoByCarId(carId).subscribe(response=>{
      this.carDetailDtos.push(response.data);
    })
  }
}
