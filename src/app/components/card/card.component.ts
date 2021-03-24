import { CarDetailDtoService } from './../../services/car-detail-dto.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor(private carDetailDtoService:CarDetailDtoService) { }

  ngOnInit(): void {
  }

}
