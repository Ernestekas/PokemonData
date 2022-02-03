import { Component, OnInit } from '@angular/core';
import { count } from 'rxjs';
import Pokemon from 'src/app/models/pokemon.model';
import PokemonCount from 'src/app/models/pokemonCount.model';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-cards-collection',
  templateUrl: './cards-collection.component.html',
  styleUrls: ['./cards-collection.component.scss']
})
export class CardsCollectionComponent implements OnInit {
  public pokemons : Pokemon[] = [];
  public pokemonCount : number = 0;
  private pokemonService? : PokemonService;

  constructor(pokemonService? : PokemonService) { 
    this.pokemonService = pokemonService;
  }

  ngOnInit(): void {
    this.getPokemonCount();
    this.getDefaultPokemons();
  }

  private getDefaultPokemons() : void {
    for(let i = 1; i <= 20; i++){
      if(i == 1){
        this.pokemonService?.getByName('pikachu').subscribe((pokemon) =>{
          this.pokemons.push(pokemon);
        });
      }
      else{
        this.pokemonService?.getById(i).subscribe((pokemon) => {
          this.pokemons.push(pokemon);
        });
      }
    }
  }

  private getPokemonCount() : void {
    this.pokemonService?.getCount().subscribe((count) => {
      this.pokemonCount = count.count;
    })
  }
}
