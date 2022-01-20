import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';


@Component({
  selector: 'app-registation',
  templateUrl: './registation.component.html',
  styleUrls: ['./registation.component.css']
})
export class RegistationComponent implements OnInit{ 
  loginForm=new FormGroup({
  email:new FormControl("",[Validators.required,Validators.maxLength(30),Validators.minLength(7),Validators.email]),
  pass:new FormControl("",[Validators.minLength(7),Validators.maxLength(12)])
})
get email(){
return this.loginForm.get('email')
}
get pass(){
return this.loginForm.get('pass')
}

login(){
console.log(this.loginForm.value);

    localStorage.setItem("uemail",this.loginForm.value.email)
    localStorage.setItem("upass",this.loginForm.value.pass)
}
    
  constructor() { }

  ngOnInit(): void {
  }

}
