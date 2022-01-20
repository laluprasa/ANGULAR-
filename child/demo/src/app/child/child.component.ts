import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
@Output() message:EventEmitter<string>=new EventEmitter<string>()
passData(){
  this.message.emit("this data has come from child commponent")
}
 constructor() { }

  ngOnInit(): void {
  }

}
