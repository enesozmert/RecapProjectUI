import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class FindexService {

  constructor(private httpClient: HttpClient) { }
  getUserFindex():Observable<SingleResponseModel<number>>{
    let newPath = environment.appUrl + "findeks/getuserfindex"
    return this.httpClient.get<SingleResponseModel<number>>(newPath);
  }
  getCarFindex():Observable<SingleResponseModel<number>>{
    let newPath = environment.appUrl + "findeks/getcarfindex"
    return this.httpClient.get<SingleResponseModel<number>>(newPath);
  }
}
