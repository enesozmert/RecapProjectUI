"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CarsComponent = void 0;
var core_1 = require("@angular/core");
var CarsComponent = /** @class */ (function () {
    function CarsComponent(carDetailDtoService) {
        this.carDetailDtoService = carDetailDtoService;
        this.carDetailDtos = [];
        this.dataLoaded = false;
    }
    CarsComponent.prototype.ngOnInit = function () {
        this.getCarDetailDto();
    };
    CarsComponent.prototype.getCarDetailDto = function () {
        var _this = this;
        this.carDetailDtoService.getCarDetailDto().subscribe(function (response) {
            _this.carDetailDtos = response.data;
            _this.dataLoaded = true;
            console.log(_this.carDetailDtos);
        });
    };
    CarsComponent = __decorate([
        core_1.Component({
            selector: 'app-cars',
            templateUrl: './cars.component.html',
            styleUrls: ['./cars.component.css']
        })
    ], CarsComponent);
    return CarsComponent;
}());
exports.CarsComponent = CarsComponent;
