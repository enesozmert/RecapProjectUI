import { ActivatedRoute } from '@angular/router';
import { Brand } from 'src/app/models/entities/brand';
import { Color } from 'src/app/models/entities/color';
import { BrandService } from './../../../services/brand.service';
import { ColorService } from './../../../services/color.service';
import { CarService } from './../../../services/car.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ConfirmationService } from 'primeng/api';
import { Car } from 'src/app/models/entities/car';

@Component({
  selector: 'app-car-detail-dto-add',
  templateUrl: './car-detail-dto-add.component.html',
  styleUrls: ['./car-detail-dto-add.component.css'],
  providers: [ConfirmationService]
})
export class CarDetailDtoAddComponent implements OnInit {
  colorsName: string[]
  brandsName: string[]
  colors: Color[]
  brands: Brand[]
  car:Car
  selectBrandId: any
  selectColorId: any
  carDetailDtoAddForm: FormGroup;
  position: string;
  dataLoaded: boolean = false
  constructor(private toastrService: ToastrService,
    private confirmationService: ConfirmationService,
    private carService: CarService,
    private colorService: ColorService,
    private brandService: BrandService,
    private formBuilder: FormBuilder,
    private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.createCarDetailDtoAddForm()
    this.getBrands()
    this.getColors()
    this.activatedRoute.params.subscribe(params => {
      if (params["carId"]) {
        //console.log(params["brandId"])
        this.getCarById(Number(params["carId"]))
      }
    })
  }
  getCarById(id: number) {
    this.carService.getCar(id).subscribe(response => {
      this.car = response.data
      this.carDetailDtoAddForm.setValue({
        colorID:this.car.colorID,
        brandID:this.car.brandID,
        modelYear:this.car.modelYear,
        dailyPrice:this.car.dailyPrice,
        description:this.car.description
      })
    })
  }
  createCarDetailDtoAddForm() {
    this.carDetailDtoAddForm = this.formBuilder.group({
      colorID: ["", Validators.required],
      brandID: ["", Validators.required],
      modelYear: ["", Validators.required],
      dailyPrice: ["", Validators.required],
      description: ["", Validators.required],
    })
  }
  carAdded(){
    this.activatedRoute.params.subscribe(params => {
      if (params["carId"]) {
        this.update(params["carId"])
      }else{
        this.add()
      }
    })
  }
  add() {
    //console.log(this.selectColorId);
    //console.log(this.carDetailDtoAddForm.value);
    if (this.carDetailDtoAddForm.valid) {
      let productModel = Object.assign({}, this.carDetailDtoAddForm.value)
      this.carService.add(productModel).subscribe(response => {
        this.toastrService.success(response.message, "Success")
        //console.log(response)
      }, responseError => {
        //console.log(responseError)
        if (responseError.error.Errors.length > 0) {
          //console.log(responseError)
          for (let i = 0; i < responseError.error.Errors.length; i++) {
            this.toastrService.error(responseError.error.Errors[i].ErrorMessage, "Errors")
          }
        }
      });
    } else {
      this.toastrService.error("Form Error Is Invalid!", "Error")
    }
  }
  update(id:number){
    console.log(this.selectColorId);
    //console.log(this.carDetailDtoAddForm.value);
    if (this.carDetailDtoAddForm.valid) {
      let carModel = Object.assign({}, this.carDetailDtoAddForm.value)
      carModel.id=id
      this.carService.update(carModel).subscribe(response => {
        this.toastrService.success(response.message, "Success")
        //console.log(response)
      }, responseError => {
        //console.log(responseError)
        if (responseError.error.Errors.length > 0) {
          //console.log(responseError)
          for (let i = 0; i < responseError.error.Errors.length; i++) {
            this.toastrService.error(responseError.error.Errors[i].ErrorMessage, "Errors")
          }
        }
      });
    } else {
      this.toastrService.error("Form Error Is Invalid!", "Error")
    }
  }
  getBrands() {
    this.brandService.getBrands().subscribe((response) => {
      this.brands = response.data;
      this.dataLoaded = true
    })
  }
  getColors() {
    this.colorService.getColors().subscribe((response) => {
      this.colors = response.data;
      this.dataLoaded = true
    })
  }
  confirmPosition(position: string) {
    this.position = position;

    this.confirmationService.confirm({
      message: 'Do you want to delete this record?',
      header: 'Delete Confirmation',
      icon: 'pi pi-info-circle',
      accept: () => {
        this.carAdded()
        this.toastrService.success("Success", "Confirmed");
      },
      reject: () => {
        this.toastrService.error("Error", "Not Confirmed");
      },
      key: "positionDialog"
    });
  }
}
