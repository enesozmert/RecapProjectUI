import { environment } from './../../environments/environment';
import { CarImageDetailDto } from './../models/dtos/carImageDetailDto';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ListResponseModel } from '../models/listResponseModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarImageDetailDtoService {

  constructor(private httpClient: HttpClient) {

  }
  getCarImageDetailDto(carId: number): Observable<ListResponseModel<CarImageDetailDto>> {
    let newPath = environment.appUrl + "cars/getcarimagedetails?carId=" + carId
    return this.httpClient.get<ListResponseModel<CarImageDetailDto>>(newPath);
  }
  getCarImageView(carImageId: number) {
    let newPath = environment.appUrl + "carimages/view?id=" + carImageId
    return newPath
  }
}
