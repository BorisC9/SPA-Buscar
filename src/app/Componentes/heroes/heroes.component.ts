import { Component } from '@angular/core';
import { Heroe, HeroesService } from '../services/heroes.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'   
})
export class HeroesComponent {
  heroes:Heroe[]=[];
  variable:string="";
  terminoBusqueda: string = '';
  heroesEncontrados: Heroe[] = [];

  constructor(private _heroesService:HeroesService, private router: Router){
  }
  
  buscarHeroes() {
    this.heroesEncontrados = this._heroesService.buscarHeroes(this.terminoBusqueda);
    console.log(this.heroesEncontrados);
    this.heroesEncontrados = this.heroes.filter(hero =>
      hero.nombre.toLowerCase().includes(this.terminoBusqueda.toLowerCase())
    );
  }

  ngOnInit(): void {
    this.heroes = this._heroesService.getHeroes();
    console.log(this.heroes);
  }

  verHeroe(idx: number){
    console.log(idx);
    this.router.navigate(['/heroe', idx]);
  }
  
  
}

