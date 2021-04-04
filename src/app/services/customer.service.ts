import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Customer } from '../models/entities/customer';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private httpClient: HttpClient) { }
  getCustomers():Observable<ListResponseModel<Customer>> {
    let newPath = environment.appUrl + "customers/getall"
    return this.httpClient.get<ListResponseModel<Customer>>(newPath);
  }
  add(customer: Customer):Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(environment.appUrl + "customers/add",customer)
  }
  update(customer: Customer):Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(environment.appUrl + "customers/update",customer)
  }
  getCustomer(id:number):Observable<SingleResponseModel<Customer>>{
    let newPath = environment.appUrl + "customers/getbyid?id="+id
    return this.httpClient.get<SingleResponseModel<Customer>>(newPath);
  }
}
