import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { TableModule } from 'primeng/table';
import { AccordionModule } from 'primeng/accordion';
import { HttpClientModule } from '@angular/common/http';
import { MenubarModule } from 'primeng/menubar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarDetailDtoComponent } from './components/list/car-detail-dto/car-detail-dto.component';
import { NaviComponent } from './components/navi/navi.component';
import { RentalDetailDtoComponent } from './components/list/rental-detail-dto/rental-detail-dto.component';
import { MainComponent } from './components/main/main.component';
import { LoadComponent } from './components/load/load.component';
import { ListComponent } from './components/list/list.component';
import { BrandComponent } from './components/list/brand/brand.component';
import { ColorComponent } from './components/list/color/color.component';
import { CustomerDetailDtoComponent } from './components/list/customer-detail-dto/customer-detail-dto.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LoadComponent,
    ListComponent,
    BrandComponent,
    ColorComponent,
    CustomerDetailDtoComponent,
    CarDetailDtoComponent,
    NaviComponent,
    RentalDetailDtoComponent,
    SidebarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MenubarModule,
    AccordionModule,
    TableModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
