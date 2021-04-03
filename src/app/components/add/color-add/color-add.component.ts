import { ActivatedRoute } from '@angular/router';
import { ColorService } from './../../../services/color.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ConfirmationService } from 'primeng/api';
import { Color } from 'src/app/models/entities/color';

@Component({
  selector: 'app-color-add',
  templateUrl: './color-add.component.html',
  styleUrls: ['./color-add.component.css'],
  providers: [ConfirmationService]
})
export class ColorAddComponent implements OnInit {
  colorAddForm: FormGroup;
  position: string;
  color:Color
  constructor(private toastrService: ToastrService,
    private confirmationService: ConfirmationService,
    private colorService: ColorService,
    private formBuilder: FormBuilder,
    private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.createBrandAddForm()
    this.activatedRoute.params.subscribe(params => {
      if (params["colorId"]) {
        //console.log(params["brandId"])
        this.getColorId(Number(params["colorId"]))
      }
    })
  }
  getColorId(id:number){
    this.colorService.getColor(id).subscribe(response => {
      this.color = response.data
      this.colorAddForm.setValue({
        brandName:this.color.colorName
      })
    })
  }
  createBrandAddForm() {
    this.colorAddForm = this.formBuilder.group({
      colorName: ["", Validators.required]
    })
  }
  colorAdded(){
    this.activatedRoute.params.subscribe(params => {
      if (params["colorId"]) {
        this.update(params["colorId"])
      }else{
        this.add()
      }
    })
  }
  add() {
    if (this.colorAddForm.valid) {
      let productModel = Object.assign({}, this.colorAddForm.value)
      this.colorService.add(productModel).subscribe(response => {
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
    //console.log(this.selectColorId);
    //console.log(this.carDetailDtoAddForm.value);
    if (this.colorAddForm.valid) {
      let carModel = Object.assign({}, this.colorAddForm.value)
      carModel.id=id
      this.colorService.update(carModel).subscribe(response => {
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
  confirmPosition(position: string) {
    this.position = position;

    this.confirmationService.confirm({
      message: 'Do you want to delete this record?',
      header: 'Delete Confirmation',
      icon: 'pi pi-info-circle',
      accept: () => {
        this.colorAdded()
        this.toastrService.success("Success", "Confirmed");
      },
      reject: () => {
        this.toastrService.error("Error", "Not Confirmed");
      },
      key: "positionDialog"
    });
  }
}
