import { Hero } from './../hero';
import { HEROS } from './../mock-heros';
import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service'; //

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit {
  title:string;
  heros:Hero[];
  selectedHero:Hero;
  constructor(private heroService: HeroService) { //注入服务
    this.title="My Heros";
    //this.selectedHero=null;
    //console.log(this.selectedHero);
    //this.heros = HEROS;
    // this.heros = [
    //   new Hero (2,"1") ,
    //   new Hero (3,"2") ,
    //   new Hero (4,"3") ,
    //   new Hero (5,"423") ,
    //   new Hero (6,"23") ,
    //   new Hero (7,"123") ,
    // ]
  }
  onClick(hero:Hero){
    console.log("点击了"+hero.id);
    this.selectedHero = hero;
    console.log(this.selectedHero);
  }

  delete(hero:Hero){
     
  } 

  ngOnInit() {
    //console.log('1');
    this.getHeros();
  }


  getHeros(): void {
    //this.heros = HEROS;
    //console.log('12');
      this.heroService.getHeros()
         .subscribe(heros => this.heros = heros);
    //  console.log("getHeros");
  }

  deleteHeros(hero:Hero):void{
    this.heros = this.heros.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }
}
