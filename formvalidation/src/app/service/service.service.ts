import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  getData(){
     return [
       {name:"lalu",department:"developer",id:1 },
       {name:"charn",department:"developer",id:2 },
       {name:"sai",department:"developer",id:3 },
       {name:"madhav",department:"developer",id:4 },
       {name:"sasi",department:"developer",id:5 }
      ]
  }

  constructor() { }
}
