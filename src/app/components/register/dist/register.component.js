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
        this.passwordSecurityKnobValue = 50;
        this.passwordSecurityKnobClass = "";
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.createRegisterFrom();
        this.passwordSecurityControl();
    };
    RegisterComponent.prototype.createRegisterFrom = function () {
        this.registerForm = this.formBuilder.group({
            "email": ["", forms_1.Validators.required],
            "password": ["", forms_1.Validators.required],
            "nickName": ["", forms_1.Validators.required],
            "firstName": ["", forms_1.Validators.required],
            "lastName": ["", forms_1.Validators.required],
            "passwordsecurity": ["", forms_1.Validators.required]
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
    RegisterComponent.prototype.keyupPasswordEvent = function (event) {
        this.passwordSecurityControl();
        console.log(event.target.value);
    };
    RegisterComponent.prototype.passwordSecurityControl = function () {
        if (this.registerForm.value.password.length > 0) {
            this.passwordSecurityKnobClass = "visibility: visible;";
            this.passwordSecurityKnobValue = this.checkStrength(this.registerForm.value.password);
        }
        else {
            this.passwordSecurityKnobClass = "visibility: hidden;display: none;";
        }
    };
    RegisterComponent.prototype.checkStrength = function (password) {
        var strength = 0;
        if (password.length > 7)
            strength += 1;
        if (password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/))
            strength += 1;
        if (password.match(/([a-zA-Z])/) && password.match(/([0-9])/))
            strength += 1;
        if (password.match(/([!,%,&,@,#,$,^,*,?,_,~])/))
            strength += 1;
        if (password.match(/(.*[!,%,&,@,#,$,^,*,?,_,~].*[!,",%,&,@,#,$,^,*,?,_,~])/))
            strength += 1;
        return (strength * 2) * 10;
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
