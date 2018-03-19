import { Component, OnInit } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent { //implements OnInit
  products: Product[];  //products:Array<Product>
  constructor() {
    this.products = [
      new Product("MYSHES", "Black Running Shoes","url1",["Men","Shoes","Running Shoes"],100.02),
      new Product("NEATOJACKET", "Blue Jacket","url2",["Women","Apparl","Jackets&Vests"],30.56),
      new Product("NICEHAT", "A Nice Black Hat","url3",["Men","Accrssories","Hats"],85.56),
    ]
  }

  //myFunction = myFunction;
  // ngOnInit() {
  // }
  productWasSelected(product: Product): void {
    console.log("Product click:", product);
  }
}


function myFunction() {
  console.log(arguments); //输出四次？？？
  return "newStr";
}

