import { CarDetailDto } from './../models/dtos/carDetailDto';
import { CarDetailDto } from 'src/app/models/dtos/carDetailDto';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarDetailDtoService {

  apiUrl = 'https://localhost:44356/api/';
  constructor(private httpClient: HttpClient) { }

  getCarDetailDto(): Observable<ListResponseModel<CarDetailDto>> {
    let newPath = this.apiUrl + "cars/getcardetails"
    return this.httpClient.get<ListResponseModel<CarDetailDto>>(newPath);
  }
  getCarDetailDtoByBrandId(): Observable<ListResponseModel<CarDetailDto>> {
    let newPath = this.apiUrl + "cars/getcardetaildtobybrandId"
    return this.httpClient.get<ListResponseModel<CarDetailDto>>(newPath);
  }
  getColorDetailDtoByBrandId(): Observable<ListResponseModel<CarDetailDto>> {
    let newPath = this.apiUrl + "cars/getcardetaildtobycolorId"
    return this.httpClient.get<ListResponseModel<CarDetailDto>>(newPath);
  }
