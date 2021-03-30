"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.NaviComponent = void 0;
var core_1 = require("@angular/core");
var NaviComponent = /** @class */ (function () {
    function NaviComponent(appComponent, authService, router) {
        this.appComponent = appComponent;
        this.authService = authService;
        this.router = router;
        this.items = [];
        this.isUserInfoMenu = true;
        this.userInfoMenuClass = "display:none;visibility:hidden;";
    }
    NaviComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.items = [
            {
                label: 'Home',
                icon: 'pi pi-fw pi-home',
                routerLink: ['/']
            },
            {
                label: 'Car List',
                icon: 'pi pi-fw pi-table',
                routerLink: ['/cars']
            },
            {
                label: 'Users',
                icon: 'pi pi-fw pi-user',
                escape: false,
                styleClass: "user",
                items: [
                    {
                        label: 'New',
                        icon: 'pi pi-fw pi-user-plus'
                    },
                    {
                        label: 'Delete',
                        icon: 'pi pi-fw pi-user-minus',
                        visible: false
                    },
                    {
                        label: 'Search',
                        icon: 'pi pi-fw pi-users',
                        items: [
                            {
                                label: 'Filter',
                                icon: 'pi pi-fw pi-filter',
                                items: [
                                    {
                                        label: 'Print',
                                        icon: 'pi pi-fw pi-print'
                                    }
                                ]
                            },
                            {
                                icon: 'pi pi-fw pi-bars',
                                label: 'List'
                            }
                        ]
                    }
                ]
            },
            {
                label: 'Events',
                icon: 'pi pi-fw pi-calendar',
                visible: this.authService.isAuthenticadet(),
                items: [
                    {
                        label: 'Car',
                        icon: 'pi pi-fw pi-pencil',
                        items: [
                            {
                                label: 'Add',
                                icon: 'pi pi-fw pi-calendar-minus',
                                routerLink: ['/add/car']
                            },
                            {
                                label: 'View',
                                icon: 'pi pi-fw pi-calendar-minus',
                                routerLink: ['/list/cardetaildto']
                            }
                        ]
                    },
                    {
                        label: 'Color',
                        icon: 'pi pi-fw pi-pencil',
                        items: [
                            {
                                label: 'Add',
                                icon: 'pi pi-fw pi-calendar-minus',
                                routerLink: ['/add/color']
                            },
                            {
                                label: 'View',
                                icon: 'pi pi-fw pi-calendar-minus',
                                routerLink: ['/list/color']
                            }
                        ]
                    },
                    {
                        label: 'Brand',
                        icon: 'pi pi-fw pi-pencil',
                        items: [
                            {
                                label: 'Add',
                                icon: 'pi pi-fw pi-calendar-minus',
                                routerLink: ['/add/brand']
                            },
                            {
                                label: 'View',
                                icon: 'pi pi-fw pi-calendar-minus',
                                routerLink: ['/list/brand']
                            }
                        ]
                    }
                ]
            },
            {
                label: 'Quit',
                icon: 'pi pi-fw pi-power-off',
                visible: this.authService.isAuthenticadet(),
                command: function () { return _this.signOut(); },
                routerLink: ['/']
            }
        ];
    };
    NaviComponent.prototype.reloadUrl = function () {
        ///location.reload();
        return false;
    };
    NaviComponent.prototype.openNavi = function () {
        this.appComponent.openNav();
    };
    NaviComponent.prototype.isAuthenticadet = function () {
        return this.authService.isAuthenticadet();
    };
    NaviComponent.prototype.isAuthenticadetIconClass = function () {
        if (this.authService.isAuthenticadet()) {
            return "visibility:visible;";
        }
        else {
            return "visibility:visible;display:none;";
        }
    };
    NaviComponent.prototype.isNotAuthenticadetIconClass = function () {
        if (!this.authService.isAuthenticadet()) {
            return "visibility:visible;";
        }
        else {
            return "visibility:visible;display:none;";
        }
    };
    NaviComponent.prototype.userInfoClickEvent = function () {
        if (this.isUserInfoMenu == false) {
            this.userInfoMenuClass = "display:none;visibility:hidden;";
            this.isUserInfoMenu = true;
        }
        else {
            this.userInfoMenuClass = "visibility:visible;";
            this.isUserInfoMenu = false;
        }
    };
    NaviComponent.prototype.getFullName = function () {
        return this.authService.getCurrentFullName();
    };
    NaviComponent.prototype.signOut = function () {
        this.isAuthenticadet();
        localStorage.clear();
        location.reload();
        this.router.navigate(['/']);
    };
    NaviComponent = __decorate([
        core_1.Component({
            selector: 'app-navi',
            templateUrl: './navi.component.html',
            styleUrls: ['./navi.component.css']
        })
    ], NaviComponent);
    return NaviComponent;
}());
exports.NaviComponent = NaviComponent;
