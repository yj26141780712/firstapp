import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent,FirstComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { SingleComponent } from './single/single.component';
import { ClubComponent } from './club/club.component';
import { ProductRowComponent } from './product/product-row/product-row.component';
import { ProductImageComponent } from './product/product-image/product-image.component';
import { PriceDisplayComponent } from './product/price-display/price-display.component';
import { ProductDepartmentComponent } from './product/product-department/product-department.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductComponent } from './product/product.component';



//declarations 重复申明同一个组件问题??? app-root组件已经渲染
@NgModule({
  declarations: [
    ProductImageComponent,
    PriceDisplayComponent,
    ProductDepartmentComponent,
    ProductRowComponent,
    ProductListComponent,
    ProductComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [ProductComponent] 
  // 无需单独渲染组件（SingleComponent）无需加到此数组
})
export class AppModule { }
