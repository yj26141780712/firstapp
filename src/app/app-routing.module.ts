import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HerosComponent } from './heros/heros.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { HerodetailsComponent } from './herodetails/herodetails.component';
import { ClubComponent } from './club/club.component';


const routes: Routes = [
  { path: '', redirectTo: '/club', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'heros', component: HerosComponent },
  { path: 'club', component: ClubComponent },
  { path: 'detail/:id', component: HerodetailsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
})
export class AppRoutingModule {
  
}





