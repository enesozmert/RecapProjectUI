import { RentalDetailDto } from './../models/dtos/rentalDetailDto';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class RentalDetailDtoService {

  apiUrl = 'https://localhost:44356/api/rentals/getrentaldetails';
  constructor(private httpClient: HttpClient) { }

 getCarDetailDto():Observable<ListResponseModel<RentalDetailDto>> {
   return this.httpClient.get<ListResponseModel<RentalDetailDto>>(this.apiUrl);
 }
}
