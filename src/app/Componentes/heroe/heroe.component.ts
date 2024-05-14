import { Component } from '@angular/core';
import { HeroesService } from '../services/heroes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrl: './heroe.component.css'
})
export class HeroeComponent {

  heroe:any={};


  constructor(private activatedRoute:ActivatedRoute, 
    private _heroesService:HeroesService)
    {
      this.activatedRoute.params.subscribe(params => {
        this.heroe =_heroesService.getHeroe(params['id']);
        console.log(this.heroe);
    })
  }
  
}
