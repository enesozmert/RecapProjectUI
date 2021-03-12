import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomerDetailDtoResponseModel } from '../models/responseModel/customerDetailDtoResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CustomerDetailDtoService {
  apiUrl = 'https://localhost:44356/api/customers/getcustomerdetails';
  constructor(private httpClient: HttpClient) { }

 getCarDetailDto():Observable<CustomerDetailDtoResponseModel> {
   return this.httpClient.get<CustomerDetailDtoResponseModel>(this.apiUrl);
 }
}
