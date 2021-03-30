import { AuthService } from './../../services/auth.service';
import { AppComponent } from './../../app.component';
import { MenuItem } from 'primeng/api';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, Routes } from '@angular/router';

@Component({
    selector: 'app-navi',
    templateUrl: './navi.component.html',
    styleUrls: ['./navi.component.css']
})
export class NaviComponent implements OnInit {
    items: MenuItem[] = [];
    isUserInfoMenu: boolean = true
    isAuth:boolean;
    userInfoMenuClass: string = "display:none;visibility:hidden;"
    constructor(private appComponent: AppComponent,
        private authService: AuthService,
        private router: Router) { }

    ngOnInit(): void {
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
                        icon: 'pi pi-fw pi-user-plus',

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
                visible:this.authService.isAuthenticadet(),
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
                command: () => this.signOut(),
                routerLink: ['/']

            }
        ];
    }
    reloadUrl():boolean{
        ///location.reload();
        return false;
    }
    openNavi() {
        this.appComponent.openNav();
    }
    isAuthenticadet(){
        return this.authService.isAuthenticadet();
    }
    isAuthenticadetIconClass() {
        if (this.authService.isAuthenticadet()) {
            return "visibility:visible;";
        } else {
            return "visibility:visible;display:none;";
        }
    }
    isNotAuthenticadetIconClass() {
        if (!this.authService.isAuthenticadet()) {
            return "visibility:visible;";
        } else {
            return "visibility:visible;display:none;";
        }
    }
    userInfoClickEvent() {
        if (this.isUserInfoMenu == false) {
            this.userInfoMenuClass = "display:none;visibility:hidden;";
            this.isUserInfoMenu = true
        } else {
            this.userInfoMenuClass = "visibility:visible;";
            this.isUserInfoMenu = false
        }
    }
    getFullName():string{
        return this.authService.getCurrentFullName();
    }
    signOut() {
        this.isAuthenticadet()
        localStorage.clear();
        location.reload();
        this.router.navigate(['/'])
    }
}
