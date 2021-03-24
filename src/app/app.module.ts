import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { AccordionModule } from 'primeng/accordion';
import { HttpClientModule } from '@angular/common/http';
import { MenubarModule } from 'primeng/menubar';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SlideMenuModule } from 'primeng/slidemenu';
import { GalleriaModule } from 'primeng/galleria';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ToastrModule } from "ngx-toastr";
import { ReactiveFormsModule } from "@angular/forms"
import { MatIconModule } from '@angular/material/icon';
import {CarouselModule} from 'primeng/carousel';

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
import { CarimageComponent } from './components/carimage/carimage.component';
import { SafePipe } from './pipes/safe.pipe';
import { SearchPipe } from './pipes/search.pipe';
import { CarFilterComponent } from './components/car-filter/car-filter.component';
import { RentACarComponent } from './components/rent-acar/rent-acar.component';
import { CartSummaryComponent } from './components/cart-summary/cart-summary.component';
import { CartComponent } from './components/cart/cart.component';
import { CarImageGalleryComponent } from './components/car-image-gallery/car-image-gallery.component';

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
    CarimageComponent,
    SafePipe,
    SearchPipe,
    CarFilterComponent,
    RentACarComponent,
    CartSummaryComponent,
    CartComponent,
    CarImageGalleryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MenubarModule,
    AccordionModule,
    TableModule,
    ButtonModule,
    TieredMenuModule,
    BrowserAnimationsModule,
    SlideMenuModule,
    GalleriaModule,
    DropdownModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    CarouselModule,
    ToastrModule.forRoot({
      positionClass: "toast-bottom-center"
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
