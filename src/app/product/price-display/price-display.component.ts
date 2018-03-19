import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'price-display',
  templateUrl: './price-display.component.html',
  styleUrls: ['./price-display.component.css'],
  inputs:['price']
})
export class PriceDisplayComponent implements OnInit {
  price:string;
  constructor() { }

  ngOnInit() {
  }

}
