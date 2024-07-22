import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokeServiceService {
  pokemons = [];

  constructor(private httpClient: HttpClient) { 
    this.carregarPokemons();
  }
  async carregarPokemons() {
    const requisicao = await lastValueFrom(this.httpClient.get<any>('https://pokemon.co/api/v2/pokemon?limit=386'));
  
    const pokemons = requisicao.results.name;
  }
}
