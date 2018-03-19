import { Component, OnInit } from '@angular/core';
import { Product } from '../../product';

@Component({
  selector: 'product-image',
  host:{class:'ui small image'},
  templateUrl: './product-image.component.html',
  styleUrls: ['./product-image.component.css'],
  inputs:['product']
})
export class ProductImageComponent implements OnInit {
  product:Product;
  constructor() { }

  ngOnInit() {
  }

}
