import { Brand } from 'src/app/models/entities/brand';
import { Color } from 'src/app/models/entities/color';
import { BrandService } from './../../../services/brand.service';
import { ColorService } from './../../../services/color.service';
import { CarService } from './../../../services/car.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ConfirmationService } from 'primeng/api';

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
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.createCarDetailDtoAddForm()
    this.getBrands()
    this.getColors()
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
  add() {
    console.log(this.selectColorId);
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
        this.toastrService.success("Success", "Confirmed");
        this.add()
      },
      reject: () => {
        this.toastrService.error("Error", "Not Confirmed");
      },
      key: "positionDialog"
    });
  }
}
