import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, QueryList, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit ,OnDestroy,OnChanges,DoCheck,AfterViewInit,AfterViewChecked,AfterContentInit,AfterContentChecked{
  flag=true
  uname:any
  @ViewChild("header",{static:false})
  elem!:QueryList<any>;
  
  
  
  toggleChild(){
    this.flag=!this.flag
    
  }
  constructor() {
    console.log("parent constructornhas been called");
    
   }

  ngOnInit(): void {
    console.log(" parent ngOnInit has been called");
    
  }
  ngOnDestroy(): void {
      
  }
  ngOnChanges(changes: SimpleChanges): void {
      console.log("parent onChanges has been called");
      
  }
  ngDoCheck(): void {
      console.log("parent DoCheck has been called");
      
  }
  ngAfterContentInit(): void {
      console.log("parent AfterViewInit has been called");
      console.log(this.elem);
      
  }
  ngAfterViewChecked(): void {
      console.log("parent AfterViewChecked has been called");
      
  }
  ngAfterViewInit(): void {
      console.log("parent AfterViewInit has been called");
      
  }
  ngAfterContentChecked(): void {
      console.log("parent AfterContentChecked has been called");
      
  }
}
