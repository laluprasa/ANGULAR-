import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription,observable } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit,OnDestroy  {
  count=0;
  private mysub:Subscription=new Subscription()

  constructor() { }

  ngOnInit(): void {
    //promises
    const promises=new Promise((resolve)=>{
      console.log("promises has been called");
      setTimeout(()=>{
        resolve("Data 1 from promises")
        resolve("Data 2 from promises")
        resolve("Data 3 from promises")
      },1000)
    })
    //listining the promises
    promises.then(result=>{console.log(result);
    })

    //observables
    const observables=new Observable(sub=>{
      console.log("observable has been called");
      setTimeout(()=>{
       
        sub.next("data from observable" + this.count++)
        // sub.next("Data 1 from observable")
        // sub.next("Data 2 from observable")
        // sub.next("Data 3 from observable")
      },1000)
    })
    //listining the observable
    this.mysub= observables.subscribe((result)=>{
      console.log(result);
      
    })
  }
   ngOnDestroy():void{
     this.mysub.unsubscribe()
   }
}
