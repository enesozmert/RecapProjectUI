"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CarDetailDtoAddComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var api_1 = require("primeng/api");
var CarDetailDtoAddComponent = /** @class */ (function () {
    function CarDetailDtoAddComponent(toastrService, confirmationService, carService, colorService, brandService, formBuilder) {
        this.toastrService = toastrService;
        this.confirmationService = confirmationService;
        this.carService = carService;
        this.colorService = colorService;
        this.brandService = brandService;
        this.formBuilder = formBuilder;
        this.dataLoaded = false;
    }
    CarDetailDtoAddComponent.prototype.ngOnInit = function () {
        this.createCarDetailDtoAddForm();
        this.getBrands();
        this.getColors();
    };
    CarDetailDtoAddComponent.prototype.createCarDetailDtoAddForm = function () {
        this.carDetailDtoAddForm = this.formBuilder.group({
            colorID: ["", forms_1.Validators.required],
            brandID: ["", forms_1.Validators.required],
            modelYear: ["", forms_1.Validators.required],
            dailyPrice: ["", forms_1.Validators.required],
            description: ["", forms_1.Validators.required]
        });
    };
    CarDetailDtoAddComponent.prototype.add = function () {
        var _this = this;
        console.log(this.selectColorId);
        //console.log(this.carDetailDtoAddForm.value);
        if (this.carDetailDtoAddForm.valid) {
            var productModel = Object.assign({}, this.carDetailDtoAddForm.value);
            this.carService.add(productModel).subscribe(function (response) {
                _this.toastrService.success(response.message, "Success");
                //console.log(response)
            }, function (responseError) {
                //console.log(responseError)
                if (responseError.error.Errors.length > 0) {
                    //console.log(responseError)
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
    CarDetailDtoAddComponent.prototype.getBrands = function () {
        var _this = this;
        this.brandService.getBrands().subscribe(function (response) {
            _this.brands = response.data;
            _this.dataLoaded = true;
        });
    };
    CarDetailDtoAddComponent.prototype.getColors = function () {
        var _this = this;
        this.colorService.getColors().subscribe(function (response) {
            _this.colors = response.data;
            _this.dataLoaded = true;
        });
    };
    CarDetailDtoAddComponent.prototype.confirmPosition = function (position) {
        var _this = this;
        this.position = position;
        this.confirmationService.confirm({
            message: 'Do you want to delete this record?',
            header: 'Delete Confirmation',
            icon: 'pi pi-info-circle',
            accept: function () {
                _this.toastrService.success("Success", "Confirmed");
                _this.add();
            },
            reject: function () {
                _this.toastrService.error("Error", "Not Confirmed");
            },
            key: "positionDialog"
        });
    };
    CarDetailDtoAddComponent = __decorate([
        core_1.Component({
            selector: 'app-car-detail-dto-add',
            templateUrl: './car-detail-dto-add.component.html',
            styleUrls: ['./car-detail-dto-add.component.css'],
            providers: [api_1.ConfirmationService]
        })
    ], CarDetailDtoAddComponent);
    return CarDetailDtoAddComponent;
}());
exports.CarDetailDtoAddComponent = CarDetailDtoAddComponent;
