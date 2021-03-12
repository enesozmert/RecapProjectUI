import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarDetailDtoResponseModel } from '../models/responseModel/carDetailDtoResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarDetailDtoService {

  apiUrl = 'https://localhost:44356/api/cars/getcardetails';
  constructor(private httpClient: HttpClient) { }

 getCarDetailDto():Observable<CarDetailDtoResponseModel> {
   return this.httpClient.get<CarDetailDtoResponseModel>(this.apiUrl);
 }
}
