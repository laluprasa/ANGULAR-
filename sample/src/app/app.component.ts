import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sample';
  
  name=""
  l=[
    {name:"nrt",age:35},
    {name:"rohit",age:35},
    {name:"lalu",age:23},
    {name:"guru",age:24},
    {name:"sree",age:24}
  ]
  sree:boolean=false
  k(){
    if(this.sree){
      this.sree=false
    }else{
      this.sree=true
    }
  }
  
}
