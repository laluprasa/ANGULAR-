import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../Service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authservice:AuthService){}
  canActivate() {
    if(this.authservice.isloggedin()){
      return true
    }else{
      window.alert("you need lo logg")
      return false
    }
      
  }

    
  }
    
  
  

