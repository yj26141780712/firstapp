import { HeroService } from './../hero.service';
import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  heros:Hero[];
  constructor(private heroService:HeroService) { 

  }

  getHeros():void{
    this.heroService.getHeros().subscribe(heros=>{
      this.heros=heros.slice(1,5);
    })
  }
  ngOnInit() {
    this.getHeros();
  }

}
