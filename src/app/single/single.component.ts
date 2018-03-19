import { Component, OnInit, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.css']
})
export class SingleComponent implements OnInit {
  @Output() putRingOnit:EventEmitter<string>
  constructor() { 
    this.putRingOnit = new EventEmitter();
    //this.putRingOnit.subscribe((name:string)=>console.log(`Hello ${name}`));
  }
  liked(){
    console.log("click liked it");
    //console.log(this.putRingOnit);
    this.putRingOnit.emit("oh oh oh");
  }
  ngOnInit() {
  }

}
