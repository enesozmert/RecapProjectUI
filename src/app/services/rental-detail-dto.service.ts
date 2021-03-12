import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RentalDetailDtoResponseModel } from '../models/responseModel/rentalDetailDtoResponseModel';

@Injectable({
  providedIn: 'root'
})
export class RentalDetailDtoService {

  apiUrl = 'https://localhost:44356/api/rentals/getrentaldetails';
  constructor(private httpClient: HttpClient) { }

 getCarDetailDto():Observable<RentalDetailDtoResponseModel> {
   return this.httpClient.get<RentalDetailDtoResponseModel>(this.apiUrl);
 }
}
