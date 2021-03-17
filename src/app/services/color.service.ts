import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Color } from '../models/entities/color';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class ColorService {
   constructor(private httpClient: HttpClient) { }

  getColors():Observable<ListResponseModel<Color>> {
    let newPath = environment.appUrl + "colors/getall"
    return this.httpClient.get<ListResponseModel<Color>>(newPath);
  }
}
