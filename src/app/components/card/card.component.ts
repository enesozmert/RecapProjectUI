import { CarImageDetailDtoService } from './../../services/car-image-detail-dto.service';
import { CarDetailDtoService } from './../../services/car-detail-dto.service';
import { Component, OnInit } from '@angular/core';
import { CarImageDetailDto } from 'src/app/models/dtos/carImageDetailDto';
import { Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  carImageDetailDtos: CarImageDetailDto[] = []
  dataLoaded: boolean = false
  
  @Input() carId:number
  constructor(private carDetailDtoService:CarDetailDtoService,
    private carImageDetailDtoService:CarImageDetailDtoService) { }

  ngOnInit(): void {
    
  }
  
}
