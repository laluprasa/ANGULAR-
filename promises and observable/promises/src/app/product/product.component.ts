import { Component, OnInit } from '@angular/core';
import { Observable, observable, Subject } from 'rxjs';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const observable=new Observable(sub=>{sub.next(Math.random()*10)
    })
    //1st listner
    observable.subscribe(result=>{console.log(result);
    })
    //2nd listner
    observable.subscribe(result=>{console.log(result);
    })

    const subject=new Subject()
    //1st listner
    subject.subscribe(result=>{console.log(result);
    })
    //2nd listner
    subject.subscribe(result=>{console.log(result);
    })
  }

}
