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
  {path:"",pathMatch:"full", component:ListComponent},
  {path:"cars/getcardetailsbycolorId/:colorId", component:CarDetailDtoComponent},
  {path:"cars/getcardetailsbybrandId/:brandId", component:CarDetailDtoComponent},
  {path:"cars/getcarimagedetails/:carId", component:CarimageComponent},
  {path:"cars/getcardetailsbycolorIdorbrandId/:colorId/:brandId", component:CarDetailDtoComponent},
  {path:"cars/rentacar", component:RentACarComponent},
  {path:"cart", component:CartComponent},
  {path:"cartdetail", component:CartDetailComponent},
  {path:"payment", component:PaymentComponent},
  {path:"cars", component:CarsComponent},
  {path:"add/brand", component:BrandAddComponent},
  {path:"add/color", component:ColorAddComponent},
  {path:"add/car", component:CarDetailDtoAddComponent},
  {path:"login", component:LoginComponent},
  {path:"register", component:RegisterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
