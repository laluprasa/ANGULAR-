import { Component, OnInit } from '@angular/core';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-usersdetails',
  templateUrl: './usersdetails.component.html',
  styleUrls: ['./usersdetails.component.css']
})
export class UsersdetailsComponent implements OnInit {

  constructor( private user:UserService ) { }
  result:any
  ngOnInit(): void {
    
    this.user.getData().subscribe(data=>{this.result=data})
  }

}
