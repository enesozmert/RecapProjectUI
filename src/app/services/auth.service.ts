import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginModel } from '../models/model/loginModel';
import { TokenModel } from '../models/model/tokenModel';
import { SingleResponseModel } from '../models/singleResponseModel';
import { RegisterModel } from '../models/model/registerModel';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }
  login(loginModel: LoginModel) {
    return this.httpClient.post<SingleResponseModel<TokenModel>>(environment.appUrl + "auth/login", loginModel)
  }
  register(registerModel: RegisterModel) {
    return this.httpClient.post<SingleResponseModel<TokenModel>>(environment.appUrl + "auth/register",registerModel)
  }
  isAuthenticadet(){
    if (localStorage.getItem("token")) {
      return true;
    }else{
      return false;
    }
  }
}
