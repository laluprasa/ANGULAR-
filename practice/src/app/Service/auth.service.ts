import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isloggedin(){
    return true;
  }

  constructor() { }
}
