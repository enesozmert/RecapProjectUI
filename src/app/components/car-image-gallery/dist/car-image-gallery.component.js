"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CarImageGalleryComponent = void 0;
var core_1 = require("@angular/core");
var CarImageGalleryComponent = /** @class */ (function () {
    function CarImageGalleryComponent(carImageDetailDtoService) {
        this.carImageDetailDtoService = carImageDetailDtoService;
        this.carImageDetailDtos = [];
        this.dataLoaded = false;
        this.responsiveOptions = [
            {
                breakpoint: '1024px',
                numVisible: 5
            },
            {
                breakpoint: '768px',
                numVisible: 3
            },
            {
                breakpoint: '560px',
                numVisible: 1
            }
        ];
    }
    CarImageGalleryComponent.prototype.ngOnInit = function () {
        this.getCarImageDetail(this.carId);
    };
    CarImageGalleryComponent.prototype.getCarImageDetail = function (carId) {
        var _this = this;
        this.carImageDetailDtoService.getCarImageDetailDto(carId).subscribe(function (response) {
            _this.carImageDetailDtos = response.data;
            _this.dataLoaded = true;
        });
    };
    CarImageGalleryComponent.prototype.getCarImages = function (carImageDetailDto) {
        return this.carImageDetailDtoService.getCarImageView(carImageDetailDto.id);
    };
    __decorate([
        core_1.Input()
    ], CarImageGalleryComponent.prototype, "carId");
    CarImageGalleryComponent = __decorate([
        core_1.Component({
            selector: 'app-car-image-gallery',
            templateUrl: './car-image-gallery.component.html',
            styleUrls: ['./car-image-gallery.component.css']
        })
    ], CarImageGalleryComponent);
    return CarImageGalleryComponent;
}());
exports.CarImageGalleryComponent = CarImageGalleryComponent;
