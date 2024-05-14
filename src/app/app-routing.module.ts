import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Componentes/home/home.component';
import { AboutComponent } from './Componentes/about/about.component';
import { HeroesComponent } from './Componentes/heroes/heroes.component';
import { HeroeComponent } from './Componentes/heroe/heroe.component';

const routes: Routes = [
  {path:  'home',component:  HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'heroes',component:HeroesComponent},
  {path: 'heroe/:id', component:HeroeComponent},
  {path:'**', pathMatch:'full',redirectTo:'home'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
