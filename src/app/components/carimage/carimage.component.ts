import { RentalService } from './../../services/rental.service';
import { CarDetailDtoService } from './../../services/car-detail-dto.service';
import { CarDetailDto } from './../../models/dtos/carDetailDto';
import { element } from 'protractor';
import { CarImageDetailDtoService } from './../../services/car-image-detail-dto.service';
import { CarImageDetailDto } from './../../models/dtos/carImageDetailDto';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-carimage',
  templateUrl: './carimage.component.html',
  styleUrls: ['./carimage.component.css']
})
export class CarimageComponent implements OnInit {
  carImageDetailDtos: CarImageDetailDto[] = []
  activeState: boolean[] = [];
  carImages: any[]
  carDetailDtos: CarDetailDto[] = []
  carDetailDto: CarDetailDto
  isRented: boolean = false
  dataLoaded: boolean = false
  carImageId: number;
  carId: number;
  carIdByGallery:number;
  carImagePath: string;
  first = 0;
  rows = 10;
  constructor(private carImageDetailDtoService: CarImageDetailDtoService,
    private activatedRoute: ActivatedRoute,
    private domSanitizer: DomSanitizer,
    private toastrService: ToastrService,
    private cartService: CartService,
    private carDetailDtoService: CarDetailDtoService,
    private rentalService: RentalService) {

  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params["carId"]) {
        this.getCarImageDetail(params["carId"])
        this.isRentedByCarId(params["carId"])
        this.carIdByGallery=params["carId"]
      }
    })
    this.activeState = [false, false]
  }
  getCarImageDetail(carId: number) {
    this.carImageDetailDtoService.getCarImageDetailDto(carId).subscribe(response => {
      this.carImageDetailDtos = response.data
      response.data.forEach(element => {
        this.carImageId = element.id
        this.carId = element.carID
        this.getCarImageView(this.carImageId);
      });
      this.dataLoaded = true
    })
  }
  getCarImageView(carImageId: number) {
    this.carImagePath = this.carImageDetailDtoService.getCarImageView(carImageId);
  }
  getUrl() {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(this.carImagePath);
  }
  getCarImages(carImageDetailDto: CarImageDetailDto) {
    return this.carImageDetailDtoService.getCarImageView(carImageDetailDto.id);
  }
  getCarDetailDtoById(carId: number) {
    this.carDetailDtoService.getCarDetailDtoById(carId).subscribe(response => {
      this.carDetailDtos = response.data
      this.dataLoaded = true;
      //console.log(this.carDetailDtos)
      this.carDetailDto = Object.assign(this.carDetailDtos);
      //console.log(Object.assign(this.carDetailDtos))
      this.addToCart(this.carDetailDto)
    })
  }
  getCarIdByRouter() {
    return this.carIdByGallery
  }
  toggle(index: number) {
    this.activeState[index] = !this.activeState[index];
  }
  addToCart(CarDetailDto: CarDetailDto) {
    this.toastrService.success("Sepete eklendi", CarDetailDto.brandName + " " + CarDetailDto.modelYear)
    this.cartService.addToCart(CarDetailDto);
  }
  isRentedByCarId(carId: number) {
    this.rentalService.isRentedByCarId(carId).subscribe(response => {
      this.isRented = true
      this.toastrService.success(response.message, "Ba??ar??l??")
    }, responseError => {
      this.isRented = false
      this.toastrService.error(Object.assign(responseError)[1], "Ba??ar??s??z")
    })
  }
  isRentedByCarIdClass() {
    if (this.isRented == true) {
      return "btn btn-dark bg-gradient w-100 active"
    }
    return "btn btn-dark bg-gradient w-100 disabled"
  }
  responsiveOptions: any[] = [
    {
      breakpoint: '1024px',
      numVisible: 5
    },
    {
      breakpoint: '768px',
      numVisible: 3
    },
    {
      breakpoint: '560px',
      numVisible: 1
    }
  ];
}
