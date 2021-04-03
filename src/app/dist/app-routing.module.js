"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppRoutingModule = void 0;
var redirect_component_1 = require("./components/redirect/redirect.component");
var customer_detail_dto_component_1 = require("./components/list/customer-detail-dto/customer-detail-dto.component");
var color_component_1 = require("./components/list/color/color.component");
var brand_component_1 = require("./components/list/brand/brand.component");
var main_component_1 = require("./components/main/main.component");
var notlogin_guard_1 = require("./guards/notlogin.guard");
var login_guard_1 = require("./guards/login.guard");
var login_component_1 = require("./components/login/login.component");
var car_detail_dto_add_component_1 = require("./components/add/car-detail-dto-add/car-detail-dto-add.component");
var color_add_component_1 = require("./components/add/color-add/color-add.component");
var brand_add_component_1 = require("./components/add/brand-add/brand-add.component");
var cars_component_1 = require("./components/cars/cars.component");
var payment_component_1 = require("./components/payment/payment.component");
var cart_detail_component_1 = require("./components/cart-detail/cart-detail.component");
var cart_component_1 = require("./components/cart/cart.component");
var rent_acar_component_1 = require("./components/rent-acar/rent-acar.component");
var carimage_component_1 = require("./components/carimage/carimage.component");
var car_detail_dto_component_1 = require("./components/list/car-detail-dto/car-detail-dto.component");
var list_component_1 = require("./components/list/list.component");
var rental_detail_dto_component_1 = require("./components/list/rental-detail-dto/rental-detail-dto.component");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var register_component_1 = require("./components/register/register.component");
var routes = [
    { path: "", pathMatch: "full", component: main_component_1.MainComponent },
    { path: "list", component: list_component_1.ListComponent, canActivate: [login_guard_1.LoginGuard] },
    { path: "list/brand", component: brand_component_1.BrandComponent, canActivate: [login_guard_1.LoginGuard] },
    { path: "list/cardetaildto", component: car_detail_dto_component_1.CarDetailDtoComponent, canActivate: [login_guard_1.LoginGuard] },
    { path: "list/color", component: color_component_1.ColorComponent, canActivate: [login_guard_1.LoginGuard] },
    { path: "list/customerdetaildto", component: customer_detail_dto_component_1.CustomerDetailDtoComponent, canActivate: [login_guard_1.LoginGuard] },
    { path: "list/rentaldetaildto", component: rental_detail_dto_component_1.RentalDetailDtoComponent, canActivate: [login_guard_1.LoginGuard] },
    { path: "cars/getcardetailsbycolorId/:colorId", component: car_detail_dto_component_1.CarDetailDtoComponent },
    { path: "cars/getcardetailsbybrandId/:brandId", component: car_detail_dto_component_1.CarDetailDtoComponent },
    { path: "cars/getcarimagedetails/:carId", component: carimage_component_1.CarimageComponent },
    { path: "cars/getcardetailsbycolorIdorbrandId/:colorId/:brandId", component: car_detail_dto_component_1.CarDetailDtoComponent },
    { path: "cars/rentacar", component: rent_acar_component_1.RentACarComponent, canActivate: [login_guard_1.LoginGuard] },
    { path: "cart", component: cart_component_1.CartComponent, canActivate: [login_guard_1.LoginGuard] },
    { path: "cartdetail", component: cart_detail_component_1.CartDetailComponent, canActivate: [login_guard_1.LoginGuard] },
    { path: "payment", component: payment_component_1.PaymentComponent, canActivate: [login_guard_1.LoginGuard] },
    { path: "cars", component: cars_component_1.CarsComponent },
    { path: "add/brand", component: brand_add_component_1.BrandAddComponent, canActivate: [login_guard_1.LoginGuard] },
    { path: "add/color", component: color_add_component_1.ColorAddComponent, canActivate: [login_guard_1.LoginGuard] },
    { path: "add/car", component: car_detail_dto_add_component_1.CarDetailDtoAddComponent, canActivate: [login_guard_1.LoginGuard] },
    { path: "login", component: login_component_1.LoginComponent, canActivate: [notlogin_guard_1.NotloginGuard] },
    { path: "register", component: register_component_1.RegisterComponent, canActivate: [notlogin_guard_1.NotloginGuard] },
    { path: "redirect", component: redirect_component_1.RedirectComponent }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)
            ],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
