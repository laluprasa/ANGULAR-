import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-templateform',
  templateUrl: './templateform.component.html',
  styleUrls: ['./templateform.component.css']
})
export class TemplateformComponent implements OnInit {
  onSubmit(form:NgForm){
    console.log(form.value);
    
  }

  constructor() { }

  ngOnInit(): void {
  }

}
