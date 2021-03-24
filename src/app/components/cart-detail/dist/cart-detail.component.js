"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CartDetailComponent = void 0;
var core_1 = require("@angular/core");
var api_1 = require("primeng/api");
var CartDetailComponent = /** @class */ (function () {
    function CartDetailComponent(cartService, confirmationService, toastrService) {
        this.cartService = cartService;
        this.confirmationService = confirmationService;
        this.toastrService = toastrService;
        this.cartItems = [];
        this.paymentRouteLink = "";
    }
    CartDetailComponent.prototype.ngOnInit = function () {
        this.getCart();
    };
    CartDetailComponent.prototype.getCart = function () {
        this.cartItems = this.cartService.list();
    };
    CartDetailComponent.prototype.confirm = function (event) {
        var _this = this;
        this.confirmationService.confirm({
            target: event.target,
            message: 'Are you sure that you want to proceed?',
            icon: 'pi pi-exclamation-triangle',
            accept: function () {
                _this.toastrService.success('I Confirm', 'Success');
                _this.paymentRouteLink = "/payment";
            },
            reject: function () {
                _this.toastrService.error('I not Confirm', 'Error');
                _this.paymentRouteLink = "/";
            }
        });
    };
    CartDetailComponent.prototype.setPaymentRouteLink = function () {
        if (this.paymentRouteLink === "/" || this.paymentRouteLink === "") {
        }
        else {
            return this.paymentRouteLink;
        }
    };
    CartDetailComponent = __decorate([
        core_1.Component({
            selector: 'app-cart-detail',
            templateUrl: './cart-detail.component.html',
            styleUrls: ['./cart-detail.component.css'],
            providers: [api_1.ConfirmationService]
        })
    ], CartDetailComponent);
    return CartDetailComponent;
}());
exports.CartDetailComponent = CartDetailComponent;
