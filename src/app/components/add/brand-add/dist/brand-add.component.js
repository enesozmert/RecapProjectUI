"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.BrandAddComponent = void 0;
var core_1 = require("@angular/core");
var api_1 = require("primeng/api");
var forms_1 = require("@angular/forms");
var BrandAddComponent = /** @class */ (function () {
    function BrandAddComponent(toastrService, confirmationService, brandService, formBuilder) {
        this.toastrService = toastrService;
        this.confirmationService = confirmationService;
        this.brandService = brandService;
        this.formBuilder = formBuilder;
    }
    BrandAddComponent.prototype.ngOnInit = function () {
        this.createBrandAddForm();
    };
    BrandAddComponent.prototype.createBrandAddForm = function () {
        this.brandAddForm = this.formBuilder.group({
            brandName: ["", forms_1.Validators.required]
        });
    };
    BrandAddComponent.prototype.add = function () {
        var _this = this;
        if (this.brandAddForm.valid) {
            var productModel = Object.assign({}, this.brandAddForm.value);
            this.brandService.add(productModel).subscribe(function (response) {
                _this.toastrService.success(response.message, "Success");
                //console.log(response)
            }, function (responseError) {
                if (responseError.error.Errors.length > 0) {
                    // console.log(responseError)
                    for (var i = 0; i < responseError.error.Errors.length; i++) {
                        _this.toastrService.error(responseError.error.Errors[i].ErrorMessage, "Errors");
                    }
                }
            });
        }
        else {
            this.toastrService.error("Form Error Is Invalid!", "Error");
        }
    };
    BrandAddComponent.prototype.confirmPosition = function (position) {
        var _this = this;
        this.position = position;
        this.confirmationService.confirm({
            message: 'Do you want to delete this record?',
            header: 'Delete Confirmation',
            icon: 'pi pi-info-circle',
            accept: function () {
                _this.add();
                _this.toastrService.success("Success", "Confirmed");
            },
            reject: function () {
                _this.toastrService.error("Error", "Not Confirmed");
            },
            key: "positionDialog"
        });
    };
    BrandAddComponent = __decorate([
        core_1.Component({
            selector: 'app-brand-add',
            templateUrl: './brand-add.component.html',
            styleUrls: ['./brand-add.component.css'],
            providers: [api_1.ConfirmationService]
        })
    ], BrandAddComponent);
    return BrandAddComponent;
}());
exports.BrandAddComponent = BrandAddComponent;
