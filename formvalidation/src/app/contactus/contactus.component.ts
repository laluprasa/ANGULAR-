import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
  sdata:any
  constructor(private data:ServiceService) { 
    this.sdata=data
  }

  ngOnInit(): void {
  }

}
