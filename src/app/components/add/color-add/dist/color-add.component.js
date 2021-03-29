"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ColorAddComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var api_1 = require("primeng/api");
var ColorAddComponent = /** @class */ (function () {
    function ColorAddComponent(toastrService, confirmationService, colorService, formBuilder) {
        this.toastrService = toastrService;
        this.confirmationService = confirmationService;
        this.colorService = colorService;
        this.formBuilder = formBuilder;
    }
    ColorAddComponent.prototype.ngOnInit = function () {
        this.createBrandAddForm();
    };
    ColorAddComponent.prototype.createBrandAddForm = function () {
        this.colorAddForm = this.formBuilder.group({
            colorName: ["", forms_1.Validators.required]
        });
    };
    ColorAddComponent.prototype.add = function () {
        var _this = this;
        if (this.colorAddForm.valid) {
            var productModel = Object.assign({}, this.colorAddForm.value);
            this.colorService.add(productModel).subscribe(function (response) {
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
    ColorAddComponent.prototype.confirmPosition = function (position) {
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
    ColorAddComponent = __decorate([
        core_1.Component({
            selector: 'app-color-add',
            templateUrl: './color-add.component.html',
            styleUrls: ['./color-add.component.css'],
            providers: [api_1.ConfirmationService]
        })
    ], ColorAddComponent);
    return ColorAddComponent;
}());
exports.ColorAddComponent = ColorAddComponent;
