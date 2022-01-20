import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authservice:AuthService){}
  canActivate(){
    if(this.authservice.isloggedin()){
    return true;
  }else{
    window.alert("you need to loggin to vist this page");
    return false
  }
  
}
}
