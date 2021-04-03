import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Color } from '../models/entities/color';
import { environment } from '../../environments/environment';
import { ResponseModel } from '../models/responseModel/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})

export class ColorService {
   constructor(private httpClient: HttpClient) { }

  getColors():Observable<ListResponseModel<Color>> {
    let newPath = environment.appUrl + "colors/getall"
    return this.httpClient.get<ListResponseModel<Color>>(newPath);
  }
  add(color: Color):Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(environment.appUrl + "colors/add",color)
  }
  update(color: Color):Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(environment.appUrl + "colors/update",color)
  }
  getColor(id:number):Observable<SingleResponseModel<Color>>{
    let newPath = environment.appUrl + "colors/getbyid?id="+id
    return this.httpClient.get<SingleResponseModel<Color>>(newPath);
  }
}
