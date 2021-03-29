"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.RegisterComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(formBuilder, authService, toastrService, router) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.toastrService = toastrService;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.createRegisterFrom();
    };
    RegisterComponent.prototype.createRegisterFrom = function () {
        this.registerForm = this.formBuilder.group({
            "email": ["", forms_1.Validators.required],
            "password": ["", forms_1.Validators.required],
            "nickName": ["", forms_1.Validators.required],
            "firstName": ["", forms_1.Validators.required],
            "lastName": ["", forms_1.Validators.required]
        });
    };
    RegisterComponent.prototype.register = function () {
        var _this = this;
        if (this.registerForm.valid) {
            console.log(this.registerForm.value);
            var registerModel = Object.assign({}, this.registerForm.value);
            this.authService.register(registerModel).subscribe(function (response) {
                _this.toastrService.info(response.message);
                var token = response.data.token;
                console.log(token);
                localStorage.clear();
                localStorage.setItem("token", token);
                console.log(response);
                if (token.length > 0) {
                    _this.router.navigate(['/cars']);
                }
            }, function (responseError) {
                _this.toastrService.info(responseError.message);
                console.log(responseError);
            });
        }
    };
    RegisterComponent = __decorate([
        core_1.Component({
            selector: 'app-register',
            templateUrl: './register.component.html',
            styleUrls: ['./register.component.css']
        })
    ], RegisterComponent);
    return RegisterComponent;
}());
exports.RegisterComponent = RegisterComponent;
