"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.LoginComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(formBuilder, authService, toastrService, router) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.toastrService = toastrService;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.createLoginFrom();
    };
    LoginComponent.prototype.createLoginFrom = function () {
        this.loginForm = this.formBuilder.group({
            "email": ["", forms_1.Validators.required],
            "password": ["", forms_1.Validators.required]
        });
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        if (this.loginForm.valid) {
            //console.log(this.loginForm.value)
            var loginModel = Object.assign({}, this.loginForm.value);
            this.authService.login(loginModel).subscribe(function (response) {
                _this.toastrService.info(response.message);
                var token = String(response.data.token);
                localStorage.setItem("token", token);
                if (token.length > 0) {
                    _this.router.navigate(['/cars']);
                }
            }, function (responseError) {
                _this.toastrService.info(responseError.message);
                //console.log(responseError)
            });
        }
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.css']
        })
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
