import { CreditCard } from './../models/entities/creditCard';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CreditCartService {

  constructor(private httpClient: HttpClient) { }
  add(creditCard: CreditCard):Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(environment.appUrl + "creditcars/add",creditCard)
  }
  update(creditCard: CreditCard):Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(environment.appUrl + "creditcars/update",creditCard)
  }
  getCreditCards():Observable<ListResponseModel<CreditCard>> {
    let newPath = environment.appUrl + "creditcars/getall"
    return this.httpClient.get<ListResponseModel<CreditCard>>(newPath);
  }
  getCreditCard(id:number):Observable<SingleResponseModel<CreditCard>>{
    let newPath = environment.appUrl + "creditcars/getbyid?id="+id
    return this.httpClient.get<SingleResponseModel<CreditCard>>(newPath);
  }
  getCreditCardsByUserId(id:number):Observable<ListResponseModel<CreditCard>>{
    let newPath = environment.appUrl + "creditcars/getbyuserid?id="+id
    return this.httpClient.get<ListResponseModel<CreditCard>>(newPath);
  }
}
