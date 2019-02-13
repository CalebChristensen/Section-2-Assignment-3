import { Component, OnInit } from '@angular/core';
import { isNumber } from 'util';

@Component({
  selector: 'app-clicks',
  templateUrl: './clicks.component.html',
  styleUrls: ['./clicks.component.css']
})
export class ClicksComponent implements OnInit {
  clickId= "many";

  constructor() { }

  ngOnInit() {
  }
  // getColor() {
  //   return this.clickId >= 5 ? 'blue' 
  // }

}
