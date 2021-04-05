import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { environment } from '../../environments/environment';
import { CarDetailDto } from '../models/dtos/carDetailDto';
import { SingleResponseModel } from '../models/singleResponseModel';
@Injectable({
  providedIn: 'root'
})
export class CarDetailDtoService {

  constructor(private httpClient: HttpClient) { }

  getCarDetailDto(): Observable<ListResponseModel<CarDetailDto>> {
    let newPath = environment.appUrl + "cars/getcardetails"
    return this.httpClient.get<ListResponseModel<CarDetailDto>>(newPath);
  }
  getCarDetailDtoByCarId(carId: number): Observable<SingleResponseModel<CarDetailDto>> {
    let newPath = environment.appUrl + "cars/getcardetailsbyId?carId=" + carId
    return this.httpClient.get<SingleResponseModel<CarDetailDto>>(newPath);
  }
  getCarDetailDtoById(carId: number): Observable<ListResponseModel<CarDetailDto>> {
    let newPath = environment.appUrl + "cars/getcardetailsbyId?carId=" + carId
    return this.httpClient.get<ListResponseModel<CarDetailDto>>(newPath);
  }
  getCarDetailsByBrandId(brandId: number): Observable<ListResponseModel<CarDetailDto>> {
    let newPath = environment.appUrl + "cars/getcardetailsbybrandId?brandId=" + brandId
    return this.httpClient.get<ListResponseModel<CarDetailDto>>(newPath);
  }
  getCarDetailsByColorId(colorId: number): Observable<ListResponseModel<CarDetailDto>> {
    let newPath = environment.appUrl + "cars/getcardetailsbycolorId?colorId=" + colorId
    return this.httpClient.get<ListResponseModel<CarDetailDto>>(newPath);
  }
  getCarDetailsByColorAndBrandId(colorId: number, brandId: number) {
    let newPath = environment.appUrl + "cars/getcardetailsbycolorIdorbrorId?colorId=" + colorId + "&brandId=" + brandId
    return this.httpClient.get<ListResponseModel<CarDetailDto>>(newPath);
  }
}
