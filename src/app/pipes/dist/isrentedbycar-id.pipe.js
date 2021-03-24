"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.IsrentedbycarIdPipe = void 0;
var core_1 = require("@angular/core");
var IsrentedbycarIdPipe = /** @class */ (function () {
    function IsrentedbycarIdPipe() {
    }
    IsrentedbycarIdPipe.prototype.transform = function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        return null;
    };
    IsrentedbycarIdPipe = __decorate([
        core_1.Pipe({
            name: 'isrentedbycarId'
        })
    ], IsrentedbycarIdPipe);
    return IsrentedbycarIdPipe;
}());
exports.IsrentedbycarIdPipe = IsrentedbycarIdPipe;
