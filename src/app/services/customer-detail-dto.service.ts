import { CustomerDetailDto } from './../models/dtos/customerDetailDto';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CustomerDetailDtoService {
  apiUrl = 'https://localhost:44356/api/customers/getcustomerdetails';
  constructor(private httpClient: HttpClient) { }

 getCarDetailDto():Observable<ListResponseModel<CustomerDetailDto>> {
   return this.httpClient.get<ListResponseModel<CustomerDetailDto>>(this.apiUrl);
 }
}
