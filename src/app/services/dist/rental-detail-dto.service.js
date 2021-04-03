"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.RentalDetailDtoService = void 0;
var core_1 = require("@angular/core");
var environment_1 = require("../../environments/environment");
var RentalDetailDtoService = /** @class */ (function () {
    function RentalDetailDtoService(httpClient) {
        this.httpClient = httpClient;
    }
    RentalDetailDtoService.prototype.getRentalDetailDtos = function () {
        var newPath = environment_1.environment.appUrl + "rentals/getallrentaldetails";
        return this.httpClient.get(newPath);
    };
    RentalDetailDtoService.prototype.getRentalDetailDto = function (carId) {
        var newPath = environment_1.environment.appUrl + "rentals/getrentaldetailsbycarId?carId=" + carId;
        return this.httpClient.get(newPath);
    };
    RentalDetailDtoService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], RentalDetailDtoService);
    return RentalDetailDtoService;
}());
exports.RentalDetailDtoService = RentalDetailDtoService;
