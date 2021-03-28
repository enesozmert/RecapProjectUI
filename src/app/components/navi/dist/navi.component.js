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
    function NaviComponent(appComponent) {
        this.appComponent = appComponent;
        this.items = [];
    }
    NaviComponent.prototype.ngOnInit = function () {
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
                        icon: 'pi pi-fw pi-user-minus'
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
                        ]
                    },
                    {
                        label: 'Color',
                        icon: 'pi pi-fw pi-calendar-times',
                        items: [
                            {
                                label: 'Add',
                                icon: 'pi pi-fw pi-calendar-minus',
                                routerLink: ['/add/color']
                            }
                        ]
                    },
                    {
                        label: 'Brand',
                        icon: 'pi pi-fw pi-calendar-times',
                        items: [
                            {
                                label: 'Add',
                                icon: 'pi pi-fw pi-calendar-minus',
                                routerLink: ['/add/brand']
                            }
                        ]
                    }
                ]
            },
            {
                label: 'Quit',
                icon: 'pi pi-fw pi-power-off'
            }
        ];
    };
    NaviComponent.prototype.openNavi = function () {
        this.appComponent.openNav();
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
