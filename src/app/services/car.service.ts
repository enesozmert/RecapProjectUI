import { SingleResponseModel } from './../models/singleResponseModel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Car } from '../models/entities/car';
import { ResponseModel } from '../models/responseModel/responseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private httpClient: HttpClient) { }
  add(car: Car): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(environment.appUrl + "cars/add", car)
  }
  update(car:Car): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(environment.appUrl + "cars/update", car)
  }
  getCar(id:number):Observable<SingleResponseModel<Car>> {
    let newPath = environment.appUrl + "cars/getbyid?id=" + id
    return this.httpClient.get<SingleResponseModel<Car>>(newPath);
  }
}
