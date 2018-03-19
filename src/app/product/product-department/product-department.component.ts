import { Component, OnInit } from '@angular/core';
import { Product } from '../../product';

@Component({
  selector: 'product-department',
  templateUrl: './product-department.component.html',
  styleUrls: ['./product-department.component.css'],
  inputs:['product']
})
export class ProductDepartmentComponent implements OnInit {
  product:Product;
  constructor() { }

  ngOnInit() {
  }

}
