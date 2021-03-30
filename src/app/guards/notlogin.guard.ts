import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class NotloginGuard implements CanActivate {
  constructor(private authService:AuthService,
    private toastrService:ToastrService,
    private router:Router){
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.authService.isAuthenticadet()) {
      this.router.navigate(["/"])
      this.toastrService.error("You are logged in!");
      return false;
    }else{
      return true;
    }
  }
  
}
