import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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
reguemail:any=localStorage.getItem("uemail")
regupass:any=localStorage.getItem("upass")
login(){
    localStorage.setItem("loginuemail",this.loginForm.value.uemail)
    localStorage.setItem("loginupass",this.loginForm.value.upass)
    if(this.loginForm.value.uemail==this.reguemail && this.loginForm.value.upass==this.regupass){
      this.router.navigate(['userdashboard']);
      
    }else{
      alert('!invalid')
    }
  }
  constructor(private router:Router) { }
  ngOnInit(): void {
  }
}

