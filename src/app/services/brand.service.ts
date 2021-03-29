import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Brand } from '../models/entities/brand';
import { environment } from '../../environments/environment';
import { ResponseModel } from '../models/responseModel/responseModel';

@Injectable({
  providedIn: 'root'
})
export class BrandService {
 
  constructor(private httpClient: HttpClient) { }
  getBrands():Observable<ListResponseModel<Brand>> {
    let newPath =  environment.appUrl + "brands/getall"
    return this.httpClient.get<ListResponseModel<Brand>>(newPath);
  }
  add(brand: Brand):Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(environment.appUrl + "brands/add", brand,)
  }
}
