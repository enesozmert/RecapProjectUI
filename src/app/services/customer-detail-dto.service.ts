import { CustomerDetailDto } from './../models/dtos/customerDetailDto';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CustomerDetailDtoService {
  apiUrl = 'https://localhost:44356/api';
  constructor(private httpClient: HttpClient) { }

 getCarDetailDto():Observable<ListResponseModel<CustomerDetailDto>> {
   let newPath = environment.appUrl + "customers/getcustomerdetails"
   return this.httpClient.get<ListResponseModel<CustomerDetailDto>>(newPath);
 }
}
