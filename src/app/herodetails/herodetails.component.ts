import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Hero } from '../hero';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from '../hero.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-herodetails',
  templateUrl: './herodetails.component.html',
  styleUrls: ['./herodetails.component.css']
})
export class HerodetailsComponent implements OnInit {
  @Input() hero:Hero;
  constructor(  
    private route: ActivatedRoute, //激活的路由
    private heroService: HeroService,
    private location: Location) {
    //console.log(this.hero);    
  }

  save(){
    this.heroService.updateHero(this.hero)
     .subscribe(() => this.goBack());
  }
  goBack(){
    this.location.back();
  }
  ngOnInit() {
    //console.log(this.hero);
    this.getHero();
  }

  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id'); //获取路由属性
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }
}
