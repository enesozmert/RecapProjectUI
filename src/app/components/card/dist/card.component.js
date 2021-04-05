"use strict";
var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CardComponent = void 0;
var core_1 = require("@angular/core");
var CardComponent = /** @class */ (function() {
    function CardComponent(carDetailDtoService, toastrService, cartService, rentalDetailDtoService) {
        this.carDetailDtoService = carDetailDtoService;
        this.toastrService = toastrService;
        this.cartService = cartService;
        this.rentalDetailDtoService = rentalDetailDtoService;
        this.carDetailDtos = [];
        this.dataLoaded = false;
    }
    CardComponent.prototype.ngOnInit = function() {
        this.getCarDetailDtoById(this.carId);
    };
    CardComponent.prototype.getCarDetailDtoById = function(carId) {
        var _this = this;
        this.carDetailDtoService.getCarDetailDtoById(carId).subscribe(function(response) {
            _this.carDetailDtos = response.data;
            _this.dataLoaded = true;
            //console.log(this.carDetailDtos)
            _this.carDetailDto = Object.assign(_this.carDetailDtos);
            //console.log(Object.assign(_this.carDetailDtos));
        });
    };
    CardComponent.prototype.addToCart = function(carDetailDto) {
        this.toastrService.success("Sepete eklendi", carDetailDto.brandName + " " + carDetailDto.modelYear);
        this.cartService.addToCart(carDetailDto);
    };
    CardComponent.prototype.isEnabled = function(carDetailDto) {
        var _this = this;
        this.rentalDetailDtoService.getRentalDetailDto(Number(carDetailDto.id)).subscribe(function(response) {
            _this.rentalDetailDto = response.data;
        });
        if (this.rentalDetailDto.isEnabled == true) {
            return "btn btn-primary";
        }
        return "btn btn-primary disabled";
    };
    __decorate([
        core_1.Input()
    ], CardComponent.prototype, "carId");
    CardComponent = __decorate([
        core_1.Component({
            selector: 'app-card',
            templateUrl: './card.component.html',
            styleUrls: ['./card.component.css']
        })
    ], CardComponent);
    return CardComponent;
}());
exports.CardComponent = CardComponent;