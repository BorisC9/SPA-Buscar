import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; //

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Componentes/navbar/navbar.component';
import { HomeComponent } from './Componentes/home/home.component';
import { HeroesComponent } from './Componentes/heroes/heroes.component';
import { AboutComponent } from './Componentes/about/about.component';
import { HeroesService } from './Componentes/services/heroes.service';
import { HeroeComponent } from './Componentes/heroe/heroe.component';
import { SearchBarComponent } from './Componentes/search-bar/search-bar.component';
import { SearResltsComponent } from './Componentes/sear-reslts/sear-reslts.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    HeroesComponent,
    AboutComponent,
    HeroeComponent,
    SearchBarComponent,
    SearResltsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
    
  ],
  providers: [
    HeroesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
