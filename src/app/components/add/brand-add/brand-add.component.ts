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
  constructor(private toastrService: ToastrService,
    private confirmationService: ConfirmationService,
    private brandService: BrandService,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.createBrandAddForm()
  }
  createBrandAddForm() {
    this.brandAddForm = this.formBuilder.group({
      brandName: ["", Validators.required],
    })
  }
  add() {
    if (this.brandAddForm.valid) {
      let productModel = Object.assign({}, this.brandAddForm.value)
      this.brandService.add(productModel).subscribe(response => {
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
        this.add()
        this.toastrService.success("Success", "Confirmed");
      },
      reject: () => {
        this.toastrService.error("Error", "Not Confirmed");
      },
      key: "positionDialog"
    });
  }
  
}
