import { AppComponent } from './../../app.component';
import { MenuItem } from 'primeng/api';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-navi',
    templateUrl: './navi.component.html',
    styleUrls: ['./navi.component.css']
})
export class NaviComponent implements OnInit {
    items: MenuItem[] = [];
    constructor(private appComponent:AppComponent) { }

    ngOnInit(): void {
        this.items = [
            {
                label: 'Home',
                icon: 'pi pi-fw pi-home',
                routerLink: ['/']
            },
            {
                label: 'Car List',
                icon:  'pi pi-fw pi-table',
            },
            {
                label: 'Users',
                icon: 'pi pi-fw pi-user',
                escape: false,
                styleClass:"user",
                items: [
                    {
                        label: 'New',
                        icon: 'pi pi-fw pi-user-plus',

                    },
                    {
                        label: 'Delete',
                        icon: 'pi pi-fw pi-user-minus',

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
                        label: 'Edit',
                        icon: 'pi pi-fw pi-pencil',
                        items: [
                            {
                                label: 'Save',
                                icon: 'pi pi-fw pi-calendar-plus'
                            },
                            {
                                label: 'Delete',
                                icon: 'pi pi-fw pi-calendar-minus'
                            },

                        ]
                    },
                    {
                        label: 'Archieve',
                        icon: 'pi pi-fw pi-calendar-times',
                        items: [
                            {
                                label: 'Remove',
                                icon: 'pi pi-fw pi-calendar-minus'
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
    }
    openNavi() {
        this.appComponent.openNav();
    }
}
