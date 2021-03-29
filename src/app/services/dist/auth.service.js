"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AuthService = void 0;
var environment_1 = require("src/environments/environment");
var core_1 = require("@angular/core");
var AuthService = /** @class */ (function () {
    function AuthService(httpClient) {
        this.httpClient = httpClient;
    }
    AuthService.prototype.login = function (loginModel) {
        return this.httpClient.post(environment_1.environment.appUrl + "auth/login", loginModel);
    };
    AuthService.prototype.register = function (registerModel) {
        return this.httpClient.post(environment_1.environment.appUrl + "auth/register", registerModel);
    };
    AuthService.prototype.isAuthenticadet = function () {
        if (localStorage.getItem("token")) {
            return true;
        }
        else {
            return false;
        }
    };
    AuthService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
