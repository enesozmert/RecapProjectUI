import { RentalDetailDto } from './../models/dtos/rentalDetailDto';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RentalDetailDtoService {

  constructor(private httpClient: HttpClient) { }

 getCarDetailDto():Observable<ListResponseModel<RentalDetailDto>> {
   let newPath = environment.appUrl + "rentals/getallrentaldetails"
   return this.httpClient.get<ListResponseModel<RentalDetailDto>>(newPath);
 }
}
