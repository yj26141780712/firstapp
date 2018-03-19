import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-club',
  templateUrl: './club.component.html',
  styleUrls: ['./club.component.css']
})
export class ClubComponent implements OnInit {
  constructor() { }
  ringWasPlaced(message: string) {
    //console.log(message);
    console.log(`log:${message}`); //自定义事件
  }
  ngOnInit() {
  }

}
