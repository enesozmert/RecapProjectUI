import { JwtControllerService } from './jwt-controller.service';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginModel } from '../models/model/loginModel';
import { TokenModel } from '../models/model/tokenModel';
import { SingleResponseModel } from '../models/singleResponseModel';
import { RegisterModel } from '../models/model/registerModel';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUserId: number;
  private data = new BehaviorSubject<boolean>(false)
  isAuth = this.data.asObservable()
  constructor(private httpClient: HttpClient, private jwtControllerService: JwtControllerService) { }
  login(loginModel: LoginModel) {
    return this.httpClient.post<SingleResponseModel<TokenModel>>(environment.appUrl + "auth/login", loginModel)
  }
  register(registerModel: RegisterModel) {
    return this.httpClient.post<SingleResponseModel<TokenModel>>(environment.appUrl + "auth/register", registerModel)
  }
  isAuthenticadet() {
    if (localStorage.getItem("token")) {
      this.data.next(true)
      return true;
    } else {
      this.data.next(false)
      return false;
    }
  }
  getCurrentFullName(): string {
    let token:string=localStorage.getItem("token")
    if (token) {
      let decoded = this.jwtControllerService.decodeToken(token)
      let userName = Object.keys(decoded).filter(x => x.endsWith("/name"))[0];
      return decoded[userName];
    }
    return null
  }
  isActive(){
    let token:string=localStorage.getItem("token")
    if (token) {
      return this.jwtControllerService.isActive(token);
    }
  }
}
