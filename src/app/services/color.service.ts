import { ColorResponseModel } from './../models/responseModel/colorResponseModel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ColorService {
  apiUrl = 'https://localhost:44356/api/colors/getall';
   constructor(private httpClient: HttpClient) { }

  getColors():Observable<ColorResponseModel> {
    return this.httpClient.get<ColorResponseModel>(this.apiUrl);
  }
}