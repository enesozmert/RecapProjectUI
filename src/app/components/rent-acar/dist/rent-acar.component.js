"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.RentACarComponent = void 0;
var core_1 = require("@angular/core");
var RentACarComponent = /** @class */ (function () {
    function RentACarComponent(rentalService, cartService, carImageDetailDtoService) {
        this.rentalService = rentalService;
        this.cartService = cartService;
        this.carImageDetailDtoService = carImageDetailDtoService;
        this.cartItems = [];
        this.carImageDetailDtos = [];
        this.dataLoaded = false;
        this.responsiveOptions = [
            {
                breakpoint: '1024px',
                numVisible: 3,
                numScroll: 3
            },
            {
                breakpoint: '768px',
                numVisible: 2,
                numScroll: 2
            },
            {
                breakpoint: '560px',
                numVisible: 1,
                numScroll: 1
            }
        ];
    }
    RentACarComponent.prototype.ngOnInit = function () {
        this.getCart();
    };
    RentACarComponent.prototype.getCart = function () {
        this.cartItems = this.cartService.list();
    };
    RentACarComponent.prototype.getCarImages = function (carId) {
        return this.carImageDetailDtoService.getCarImageView(carId);
    };
    RentACarComponent.prototype.getCarImageDetail = function (carId) {
        var _this = this;
        this.carImageDetailDtoService.getCarImageDetailDto(carId).subscribe(function (response) {
            _this.carImageDetailDtos = response.data;
        });
    };
    RentACarComponent = __decorate([
        core_1.Component({
            selector: 'app-rent-acar',
            templateUrl: './rent-acar.component.html',
            styleUrls: ['./rent-acar.component.css']
        })
    ], RentACarComponent);
    return RentACarComponent;
}());
exports.RentACarComponent = RentACarComponent;
