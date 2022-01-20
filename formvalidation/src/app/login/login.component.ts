import { Component, OnInit } from '@angular/core';
import { FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm=new FormGroup({
    uemail:new FormControl("",[Validators.required,Validators.maxLength(30),Validators.minLength(7),Validators.email]),
    upass:new FormControl("",[Validators.minLength(7),Validators.maxLength(12)])
  })
get uemail(){
  return this.loginForm.get('uemail')
}
get upass(){
  return this.loginForm.get('upass')
}
login(){
  console.log(this.loginForm.value);
  
}
  constructor() { }

  ngOnInit(): void {
  }

}
