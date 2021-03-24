"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var tieredmenu_1 = require("primeng/tieredmenu");
var button_1 = require("primeng/button");
var table_1 = require("primeng/table");
var accordion_1 = require("primeng/accordion");
var http_1 = require("@angular/common/http");
var menubar_1 = require("primeng/menubar");
var app_routing_module_1 = require("./app-routing.module");
var animations_1 = require("@angular/platform-browser/animations");
var slidemenu_1 = require("primeng/slidemenu");
var galleria_1 = require("primeng/galleria");
var dropdown_1 = require("primeng/dropdown");
var forms_1 = require("@angular/forms");
var app_component_1 = require("./app.component");
var ngx_toastr_1 = require("ngx-toastr");
var forms_2 = require("@angular/forms");
var icon_1 = require("@angular/material/icon");
var carousel_1 = require("primeng/carousel");
var common_1 = require("@angular/common");
var orderlist_1 = require("primeng/orderlist");
var confirmpopup_1 = require("primeng/confirmpopup");
var confirmdialog_1 = require("primeng/confirmdialog");
var car_detail_dto_component_1 = require("./components/list/car-detail-dto/car-detail-dto.component");
var navi_component_1 = require("./components/navi/navi.component");
var rental_detail_dto_component_1 = require("./components/list/rental-detail-dto/rental-detail-dto.component");
var main_component_1 = require("./components/main/main.component");
var load_component_1 = require("./components/load/load.component");
var list_component_1 = require("./components/list/list.component");
var brand_component_1 = require("./components/list/brand/brand.component");
var color_component_1 = require("./components/list/color/color.component");
var customer_detail_dto_component_1 = require("./components/list/customer-detail-dto/customer-detail-dto.component");
var sidebar_component_1 = require("./components/sidebar/sidebar.component");
var carimage_component_1 = require("./components/carimage/carimage.component");
var safe_pipe_1 = require("./pipes/safe.pipe");
var search_pipe_1 = require("./pipes/search.pipe");
var car_filter_component_1 = require("./components/car-filter/car-filter.component");
var rent_acar_component_1 = require("./components/rent-acar/rent-acar.component");
var cart_summary_component_1 = require("./components/cart-summary/cart-summary.component");
var cart_component_1 = require("./components/cart/cart.component");
var car_image_gallery_component_1 = require("./components/car-image-gallery/car-image-gallery.component");
var cart_detail_component_1 = require("./components/cart-detail/cart-detail.component");
var payment_component_1 = require("./components/payment/payment.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                main_component_1.MainComponent,
                load_component_1.LoadComponent,
                list_component_1.ListComponent,
                brand_component_1.BrandComponent,
                color_component_1.ColorComponent,
                customer_detail_dto_component_1.CustomerDetailDtoComponent,
                car_detail_dto_component_1.CarDetailDtoComponent,
                navi_component_1.NaviComponent,
                rental_detail_dto_component_1.RentalDetailDtoComponent,
                sidebar_component_1.SidebarComponent,
                carimage_component_1.CarimageComponent,
                safe_pipe_1.SafePipe,
                search_pipe_1.SearchPipe,
                car_filter_component_1.CarFilterComponent,
                rent_acar_component_1.RentACarComponent,
                cart_summary_component_1.CartSummaryComponent,
                cart_component_1.CartComponent,
                car_image_gallery_component_1.CarImageGalleryComponent,
                cart_detail_component_1.CartDetailComponent,
                payment_component_1.PaymentComponent,
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                http_1.HttpClientModule,
                menubar_1.MenubarModule,
                accordion_1.AccordionModule,
                table_1.TableModule,
                button_1.ButtonModule,
                tieredmenu_1.TieredMenuModule,
                animations_1.BrowserAnimationsModule,
                slidemenu_1.SlideMenuModule,
                galleria_1.GalleriaModule,
                dropdown_1.DropdownModule,
                forms_1.FormsModule,
                forms_2.ReactiveFormsModule,
                icon_1.MatIconModule,
                carousel_1.CarouselModule,
                common_1.CommonModule,
                orderlist_1.OrderListModule,
                confirmpopup_1.ConfirmPopupModule,
                confirmdialog_1.ConfirmDialogModule,
                ngx_toastr_1.ToastrModule.forRoot({
                    positionClass: "toast-bottom-center"
                })
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
