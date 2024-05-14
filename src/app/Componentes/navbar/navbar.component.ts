import { Component } from '@angular/core';
import { Heroe, HeroesService } from '../services/heroes.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  terminoBusqueda: string = '';
  heroesEncontrados: Heroe[] = [];

  constructor(private _heroesService:HeroesService, private router: Router){
  }

  buscarHeroes() {
    this.heroesEncontrados = this._heroesService.buscarHeroes(this.terminoBusqueda);
    console.log(this.heroesEncontrados);
    this.heroesEncontrados = this.heroesEncontrados.filter(hero =>
      hero.nombre.toLowerCase().includes(this.terminoBusqueda.toLowerCase())
    );
  }
}
