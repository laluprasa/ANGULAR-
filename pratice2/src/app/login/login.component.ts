import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm=new FormGroup({
    uid:new FormControl("",[Validators.required,Validators.minLength(4),Validators.maxLength(10),]),
    pass:new FormControl("",[Validators.required,Validators.minLength(4),Validators.maxLength(10),])
  })
  get uid(){
    return this.loginForm.get("uid")
  }
  get pass(){
    return this.loginForm.get("pass")
  }
  login(){
    console.log(this.loginForm.value);
    localStorage.setItem("value", this.loginForm.value.uid)
    localStorage.setItem("password", this.loginForm.value.pass)
  }
  constructor() { }

  ngOnInit(): void {
  }

}
