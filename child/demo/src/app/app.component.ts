import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo';
  flag:boolean=false

  change(){
    if(this.flag){
      this.flag=false
    }else{
      this.flag=true
    }
  }
  users=[
    {name:"lalu",age:23},
    {name:"guru",age:23},
    {name:"sree",age:23},
    {name:"raju",age:2},
      
  ]
    
    s=[
      {name:"raju",age:2},
      {name:"yash",age:4},
     {name:"surya",age:6},
  
    ]
    selectedName="rohit"

  
}
