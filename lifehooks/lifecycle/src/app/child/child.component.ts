import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit,OnDestroy,OnChanges,DoCheck,AfterViewInit,AfterViewChecked,AfterContentInit,AfterContentChecked{
  interval:any
  counter:number=0
  @Input() uname:any

  constructor() {
    console.log("child constructor has been called");
    
   }
   ngOnChanges(changes: SimpleChanges): void {
     console.log("child ngOnChanges has been called");
     
       console.log(changes);
       
   }

  ngOnInit(): void {
    console.log("child ngonit() is called");
    // this.interval=setInterval(()=>{
    //   console.log(this.counter++);
      
    // },1000)
    
  }
  ngOnDestroy(): void {
      console.log("child component destroyed");
      // clearInterval(this.interval)
      
  }
  ngDoCheck(): void {
      console.log("child Docheck has been called");
      
  }
  ngAfterContentInit(): void {
    console.log("child AfterViewInit has been called");
  
    
}
ngAfterViewChecked(): void {
    console.log("child AfterViewChecked has been called");
    
}
ngAfterViewInit(): void {
    console.log("child AfterViewInit has been called");
    
}
ngAfterContentChecked(): void {
    console.log("child AfterContentChecked has been called");
    
}

}
