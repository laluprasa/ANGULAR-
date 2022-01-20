import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrls: ['./userdashboard.component.css']
})
export class UserdashboardComponent implements OnInit {

  constructor() { }
  loginuemail:any=localStorage.getItem("loginuemail")
loginupass:any=localStorage.getItem("loginupass")
reguemail:any=localStorage.getItem("uemail")
regupass:any=localStorage.getItem("upass")
  ngOnInit(): void {
  }

}
