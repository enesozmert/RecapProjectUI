import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class JwtControllerService {
  private helper:JwtHelperService = new JwtHelperService();
  constructor() {

   }
  isActive(getToken:string):any{

    if (getToken) {
      let result:boolean=this.helper.isTokenExpired(getToken)
      return !result
    }

  }
  decodeToken(getToken:string){
    if (getToken) {
      return this.helper.decodeToken(getToken)
    }
   
  }
  getTokenExpirationDate(getToken:string):any{
    if (getToken) {
      return this.helper.getTokenExpirationDate(getToken)
    }

  }
}
