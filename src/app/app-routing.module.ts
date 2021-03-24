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

const routes: Routes = [
  {path:"",pathMatch:"full", component:ListComponent},
  {path:"cars/getcardetailsbycolorId/:colorId", component:CarDetailDtoComponent},
  {path:"cars/getcardetailsbybrandId/:brandId", component:CarDetailDtoComponent},
  {path:"cars/getcarimagedetails/:carId", component:CarimageComponent},
  {path:"cars/getcardetailsbycolorIdorbrandId/:colorId/:brandId", component:CarDetailDtoComponent},
  {path:"cars/rentacar", component:RentACarComponent},
  {path:"cart", component:CartComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
