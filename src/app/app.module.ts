import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

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
import { HerosComponent } from './heros/heros.component';
import { HerodetailsComponent } from './herodetails/herodetails.component';
import { HeroService } from './hero.service';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './message.service';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';


//declarations 重复申明同一个组件问题??? app-root组件已经渲染
@NgModule({
  declarations: [
    AppComponent,
    ProductImageComponent,
    PriceDisplayComponent,
    ProductDepartmentComponent,
    ProductRowComponent,
    ProductListComponent,
    HerodetailsComponent,
    HerosComponent,
    MessagesComponent,
    DashboardComponent,
    ProductComponent,
    SingleComponent,
    ClubComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ) 
  ],
  providers: [MessageService,HeroService],
  bootstrap: [AppComponent] 
  // 无需单独渲染组件（SingleComponent）无需加到此数组
})
export class AppModule { }
