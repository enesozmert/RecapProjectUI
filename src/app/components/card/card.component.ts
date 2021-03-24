import { CarDetailDtoService } from './../../services/car-detail-dto.service';
import { Component, OnInit, Input } from '@angular/core';
import { CarDetailDto } from 'src/app/models/dtos/carDetailDto';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  carDetailDtos: CarDetailDto[] = []
  carDetailDto: CarDetailDto
  dataLoaded: boolean = false
  @Input() carId:number

  constructor(private carDetailDtoService:CarDetailDtoService) { }

  ngOnInit(): void {
    this.getCarDetailDtoById(this.carId)
  }
  getCarDetailDtoById(carId: number) {
    this.carDetailDtoService.getCarDetailDtoById(carId).subscribe(response => {
      this.carDetailDtos = response.data
      this.dataLoaded = true;
      //console.log(this.carDetailDtos)
      this.carDetailDto = Object.assign(this.carDetailDtos);
      console.log(Object.assign(this.carDetailDtos))
    })
  }
}
