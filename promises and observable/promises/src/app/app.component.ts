import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'promises';
  flag=false
  toggle(){
    this.flag=!this.flag
  }
  users=[
    {name:"lalu",city:"skht",id:101,salary:240000,Dob:new Date("22 jun 1998")},
    {name:"sai",city:"skht",id:102,salary:240000,Dob:new Date("27 jan 1998")},
    {name:"charn",city:"skht",id:103,salary:240000,Dob:new Date("27 jan 1998")},
    {name:"madhav",city:"skht",id:104,salary:240000,Dob:new Date("27 jan 1998")},
  ]
  //local storage
  uid:any= localStorage.setItem("users","city")
  id:any=localStorage.getItem("users")
}
