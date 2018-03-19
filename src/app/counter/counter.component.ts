import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  value:number;
  constructor() {
      this.value=1;
   }
   increase(){
     //console.log(123);
     this.value++;
     return false;
   }

   decrease(){
     this.value--;
     return false;
   }
  ngOnInit() {
  }

}
