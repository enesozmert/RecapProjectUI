import { CarImageDetailDtoService } from './../../services/car-image-detail-dto.service';
import { CarImageDetailDto } from './../../models/dtos/carImageDetailDto';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-carimage',
  templateUrl: './carimage.component.html',
  styleUrls: ['./carimage.component.css']
})
export class CarimageComponent implements OnInit {
  carImageDetailDto: CarImageDetailDto[] = []
  activeState: boolean[] = [];
  dataLoaded: boolean = false
  carImageId: number;
  carImagePath: string;
  first = 0;
  rows = 10;
  constructor(private carImageDetailDtoService: CarImageDetailDtoService,
    private activatedRoute: ActivatedRoute,
    private domSanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.activeState = [false]
    this.activatedRoute.params.subscribe(params => {
      if (params["carId"]) {
        this.getCarImageDetail(params["carId"])
        console.log(params["carId"])
      }
    })
  }
  getCarImageDetail(carId: number) {
    this.carImageDetailDtoService.getCarImageDetailDto(carId).subscribe(response => {
      this.carImageDetailDto = response.data
      response.data.forEach(element => {
        this.carImageId = element.id
        this.getCarImageView(this.carImageId);
      });
      this.dataLoaded = true
    })
  }
  getCarImageView(carImageId: number) {
    this.carImagePath= this.carImageDetailDtoService.getCarImageView(carImageId)
  }
  photoURL() {
    console.log(this.domSanitizer.bypassSecurityTrustResourceUrl(this.carImagePath))
    return this.domSanitizer.bypassSecurityTrustResourceUrl(this.carImagePath);
  }
  toggle(index: number) {
    this.activeState[index] = !this.activeState[index];
  }
}
