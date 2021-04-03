import { Brand } from './../../../models/entities/brand';
import { ActivatedRoute } from '@angular/router';
import { BrandService } from './../../../services/brand.service';
import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-brand-add',
  templateUrl: './brand-add.component.html',
  styleUrls: ['./brand-add.component.css'],
  providers: [ConfirmationService]
})
export class BrandAddComponent implements OnInit {
  position: string;
  brandAddForm: FormGroup;
  brand: Brand;
  constructor(private toastrService: ToastrService,
    private confirmationService: ConfirmationService,
    private brandService: BrandService,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.createBrandAddForm()
    this.activatedRoute.params.subscribe(params => {
      if (params["brandId"]) {
        //console.log(params["brandId"])
        this.getBrandById(Number(params["brandId"]))
      }
    })
  }
  createBrandAddForm() {
    this.brandAddForm = this.formBuilder.group({
      brandName: ["", Validators.required],
    })
  }
  getBrandById(id: number) {
    this.brandService.getBrand(id).subscribe(response => {
      this.brand = response.data
      this.brandAddForm.setValue({
        brandName:this.brand.brandName
      })
    })
  }
  brandAdded(){
    this.activatedRoute.params.subscribe(params => {
      if (params["brandId"]) {
        this.update(params["brandId"])
      }else{
        this.add()
      }
    })
  }
  add() {
    if (this.brandAddForm.valid) {
      let productModel = Object.assign({}, this.brandAddForm.value)
      this.brandService.add(productModel).subscribe(response => {
        console.log(productModel);
        this.toastrService.success(response.message, "Success")
        //console.log(response)
      }, responseError => {
        if (responseError.error.Errors.length > 0) {
          // console.log(responseError)
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
    if (this.brandAddForm.valid) {
      let brandModel:Brand = Object.assign({}, this.brandAddForm.value)
      brandModel.id=id
      this.brandService.update(brandModel).subscribe(response => {
        this.toastrService.success(response.message, "Success")
        //console.log(response)
      }, responseError => {
        if (responseError.error.Errors.length > 0) {
          // console.log(responseError)
          for (let i = 0; i < responseError.error.Errors.length; i++) {
            this.toastrService.error(responseError.error.Errors[i].ErrorMessage, "Errors")
          }
        }
      });
    } else {
      this.toastrService.error("Form Error Is Invalid!", "Error")
    }
  }
  confirmPosition(position: string) {
    this.position = position;

    this.confirmationService.confirm({
      message: 'Do you want to delete this record?',
      header: 'Delete Confirmation',
      icon: 'pi pi-info-circle',
      accept: () => {
        this.brandAdded()
        this.toastrService.success("Success", "Confirmed");
      },
      reject: () => {
        this.toastrService.error("Error", "Not Confirmed");
      },
      key: "positionDialog"
    });
  }

}
