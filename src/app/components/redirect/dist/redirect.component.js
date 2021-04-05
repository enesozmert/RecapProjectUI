"use strict";
var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.RedirectComponent = void 0;
var core_1 = require("@angular/core");
var RedirectComponent = /** @class */ (function() {
    function RedirectComponent(activatedRoute, router) {
        this.activatedRoute = activatedRoute;
        this.router = router;
    }
    RedirectComponent.prototype.ngOnInit = function() {
        var _this = this;
        this.activatedRoute.queryParams
            .toPromise()
            .then(function(params) {
                //console.log(params["url"]);
                if (params["url"]) {
                    _this.router.navigate(['/' + params["url"]]);
                }
                //this.setDefaultUrl()
            });
    };
    RedirectComponent = __decorate([
        core_1.Component({
            selector: 'app-redirect',
            templateUrl: './redirect.component.html',
            styleUrls: ['./redirect.component.css']
        })
    ], RedirectComponent);
    return RedirectComponent;
}());
exports.RedirectComponent = RedirectComponent;