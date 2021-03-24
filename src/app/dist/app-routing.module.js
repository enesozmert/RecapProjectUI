"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppRoutingModule = void 0;
var payment_component_1 = require("./components/payment/payment.component");
var cart_detail_component_1 = require("./components/cart-detail/cart-detail.component");
var cart_component_1 = require("./components/cart/cart.component");
var rent_acar_component_1 = require("./components/rent-acar/rent-acar.component");
var carimage_component_1 = require("./components/carimage/carimage.component");
var car_detail_dto_component_1 = require("./components/list/car-detail-dto/car-detail-dto.component");
var list_component_1 = require("./components/list/list.component");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var routes = [
    { path: "", pathMatch: "full", component: list_component_1.ListComponent },
    { path: "cars/getcardetailsbycolorId/:colorId", component: car_detail_dto_component_1.CarDetailDtoComponent },
    { path: "cars/getcardetailsbybrandId/:brandId", component: car_detail_dto_component_1.CarDetailDtoComponent },
    { path: "cars/getcarimagedetails/:carId", component: carimage_component_1.CarimageComponent },
    { path: "cars/getcardetailsbycolorIdorbrandId/:colorId/:brandId", component: car_detail_dto_component_1.CarDetailDtoComponent },
    { path: "cars/rentacar", component: rent_acar_component_1.RentACarComponent },
    { path: "cart", component: cart_component_1.CartComponent },
    { path: "cartdetail", component: cart_detail_component_1.CartDetailComponent },
    { path: "payment", component: payment_component_1.PaymentComponent },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
