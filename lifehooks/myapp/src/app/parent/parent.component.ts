import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  salesProducts=[
    {name:"mobile",price:10000},
    {name:"laptop",price:20000000},
    {name:"tv",price:2500000}
  ]
  newProducts=[
    {name:"book",price:100},
    {name:"pen",price:20},
    {name:"books",price:2500}
  ]
  oldProducts=[
    {name:"book",price:100},
    {name:"pen",price:20},
    {name:"books",price:2500}
  ]


}
