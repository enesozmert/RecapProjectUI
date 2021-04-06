import { SingleResponseModel } from './../models/singleResponseModel';
import { Rental } from './../models/entities/rental';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ListResponseModel } from '../models/listResponseModel';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { ResponseModel } from '../models/responseModel/responseModel';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  constructor(private httpClient: HttpClient) { }
  rent(rental: Rental): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(environment.appUrl + "products/add", rental)
  }
  isForRent(carId: number) {
    let newPath = environment.appUrl + "rentals/isforrent?carId=" + carId
    return this.httpClient.get<SingleResponseModel<boolean>>(newPath);
  }
  isForRentCompany(rental: Rental) {
    let newPath = environment.appUrl + "rentals/isforrentcompany"
    return this.httpClient.post<SingleResponseModel<boolean>>(newPath,rental);
  }
  isRentedByCarId(carId: number) {
    let newPath = environment.appUrl + "rentals/isrentedbycarId?carId=" + carId
    return this.httpClient.get<ListResponseModel<Rental>>(newPath);
  }
}
