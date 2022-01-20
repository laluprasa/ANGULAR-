import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-loing',
  templateUrl: './loing.component.html',
  styleUrls: ['./loing.component.css']
})
export class LoingComponent implements OnInit {
  @Input() valuechild:any
  @Input() constchild:any

  constructor() { }

  ngOnInit(): void {
  }

}
