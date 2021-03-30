"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.NotloginGuard = void 0;
var core_1 = require("@angular/core");
var NotloginGuard = /** @class */ (function () {
    function NotloginGuard(authService, toastrService, router) {
        this.authService = authService;
        this.toastrService = toastrService;
        this.router = router;
    }
    NotloginGuard.prototype.canActivate = function (route, state) {
        if (this.authService.isAuthenticadet()) {
            this.router.navigate(["/"]);
            this.toastrService.error("You are logged in!");
            return false;
        }
        else {
            return true;
        }
    };
    NotloginGuard = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], NotloginGuard);
    return NotloginGuard;
}());
exports.NotloginGuard = NotloginGuard;
