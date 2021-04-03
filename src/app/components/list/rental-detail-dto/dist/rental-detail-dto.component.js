"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.RentalDetailDtoComponent = void 0;
var core_1 = require("@angular/core");
var RentalDetailDtoComponent = /** @class */ (function () {
    function RentalDetailDtoComponent(rentalDetailDtoService) {
        this.rentalDetailDtoService = rentalDetailDtoService;
        this.rentalDetailDtos = [];
        this.dataLoaded = false;
        this.first = 0;
        this.rows = 10;
    }
    RentalDetailDtoComponent.prototype.ngOnInit = function () {
        this.getRentalDetailDto();
    };
    RentalDetailDtoComponent.prototype.getRentalDetailDto = function () {
        var _this = this;
        this.rentalDetailDtoService.getRentalDetailDtos().subscribe(function (response) {
            _this.rentalDetailDtos = response.data;
            _this.dataLoaded = true;
        });
    };
    RentalDetailDtoComponent.prototype.next = function () {
        this.first = this.first + this.rows;
    };
    RentalDetailDtoComponent.prototype.prev = function () {
        this.first = this.first - this.rows;
    };
    RentalDetailDtoComponent.prototype.reset = function () {
        this.first = 0;
    };
    RentalDetailDtoComponent.prototype.isLastPage = function () {
        return this.rentalDetailDtos ? this.first === (this.rentalDetailDtos.length - this.rows) : true;
    };
    RentalDetailDtoComponent.prototype.isFirstPage = function () {
        return this.rentalDetailDtos ? this.first === 0 : true;
    };
    RentalDetailDtoComponent = __decorate([
        core_1.Component({
            selector: 'app-rental-detail-dto',
            templateUrl: './rental-detail-dto.component.html',
            styleUrls: ['./rental-detail-dto.component.css']
        })
    ], RentalDetailDtoComponent);
    return RentalDetailDtoComponent;
}());
exports.RentalDetailDtoComponent = RentalDetailDtoComponent;
