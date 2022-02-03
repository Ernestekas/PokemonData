import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Pokemon from '../models/pokemon.model';
import PokemonCount from '../models/pokemonCount.model';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private urlBase: string = "https://pokeapi.co/api/v2/pokemon/"

  constructor(private http : HttpClient) { }

  public getDefault() :  Observable<Pokemon[]>{
    return this.http.get<Pokemon[]>(this.urlBase);
  }

  public getCount() : Observable<PokemonCount> {
    return this.http.get<PokemonCount>(this.urlBase);
  }

  public getById(id : number) : Observable<Pokemon> {
    return this.http.get<Pokemon>(this.urlBase + id);
  }

  public getByName(name : string) :Observable<Pokemon> {
    return this.http.get<Pokemon>(this.urlBase + name);
  }
}
