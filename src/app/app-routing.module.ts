import { RedirectComponent } from './components/redirect/redirect.component';
import { CustomerDetailDtoComponent } from './components/list/customer-detail-dto/customer-detail-dto.component';
import { ColorComponent } from './components/list/color/color.component';
import { BrandComponent } from './components/list/brand/brand.component';
import { MainComponent } from './components/main/main.component';
import { NotloginGuard } from './guards/notlogin.guard';
import { LoginGuard } from './guards/login.guard';
import { LoginComponent } from './components/login/login.component';
import { CarDetailDtoAddComponent } from './components/add/car-detail-dto-add/car-detail-dto-add.component';
import { ColorAddComponent } from './components/add/color-add/color-add.component';
import { BrandAddComponent } from './components/add/brand-add/brand-add.component';
import { CarsComponent } from './components/cars/cars.component';
import { PaymentComponent } from './components/payment/payment.component';
import { CartDetailComponent } from './components/cart-detail/cart-detail.component';
import { CartComponent } from './components/cart/cart.component';
import { RentACarComponent } from './components/rent-acar/rent-acar.component';
import { CarimageComponent } from './components/carimage/carimage.component';
import { CarImageDetailDto } from './models/dtos/carImageDetailDto';
import { CarDetailDtoComponent } from './components/list/car-detail-dto/car-detail-dto.component';
import { ListComponent } from './components/list/list.component';
import { RentalDetailDtoComponent } from './components/list/rental-detail-dto/rental-detail-dto.component';
import { RentalDetailDto } from './models/dtos/rentalDetailDto';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  { path: "", pathMatch: "full", component: MainComponent },
  { path: "list", component: ListComponent, canActivate: [LoginGuard] },
  { path: "list/brand", component: BrandComponent, canActivate: [LoginGuard] },
  { path: "list/cardetaildto", component: CarDetailDtoComponent, canActivate: [LoginGuard] },
  { path: "list/color", component: ColorComponent, canActivate: [LoginGuard] },
  { path: "list/customerdetaildto", component: CustomerDetailDtoComponent, canActivate: [LoginGuard] },
  { path: "list/rentaldetaildto", component: RentalDetailDtoComponent, canActivate: [LoginGuard] },
  { path: "cars/getcardetailsbycolorId/:colorId", component: CarDetailDtoComponent },
  { path: "cars/getcardetailsbybrandId/:brandId", component: CarDetailDtoComponent },
  { path: "cars/getcarimagedetails/:carId", component: CarimageComponent },
  { path: "cars/getcardetailsbycolorIdorbrandId/:colorId/:brandId", component: CarDetailDtoComponent },
  { path: "cars/rentacar", component: RentACarComponent, canActivate: [LoginGuard] },
  { path: "cart", component: CartComponent, canActivate: [LoginGuard] },
  { path: "cartdetail", component: CartDetailComponent, canActivate: [LoginGuard] },
  { path: "payment", component: PaymentComponent, canActivate: [LoginGuard] },
  { path: "cars", component: CarsComponent },
  { path: "add/brand", component: BrandAddComponent, canActivate: [LoginGuard] },
  { path: "add/color", component: ColorAddComponent, canActivate: [LoginGuard] },
  { path: "add/car", component: CarDetailDtoAddComponent, canActivate: [LoginGuard] },
  { path: "login", component: LoginComponent, canActivate: [NotloginGuard] },
  { path: "register", component: RegisterComponent, canActivate: [NotloginGuard] },
  { path: "update/brand/:brandId", component: BrandAddComponent, canActivate: [LoginGuard]},
  { path: "update/color/:colorId", component: ColorAddComponent, canActivate: [LoginGuard]},
  { path: "update/car/:carId", component: CarDetailDtoAddComponent, canActivate: [LoginGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

