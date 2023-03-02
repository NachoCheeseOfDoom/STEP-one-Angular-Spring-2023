import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable, retry } from 'rxjs';
import { PokemonDetails } from '../Models/pokemon-details.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  pokeURL = 'https://pokeapi.co/api/v2/'
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Accept': '*/*'
    })
  }

  constructor(private http: HttpClient) { }

  getPokemonList(): any {
    return this.http.get<any>(`${this.pokeURL}pokemon/?limit=151`, this.httpOptions)
    .pipe(
      map((data: any) => data.results), retry(1)
    )
  }

  getPokemonByName(name: string): Observable<PokemonDetails> {
    return this.http.get<PokemonDetails>(`${this.pokeURL}pokemon/${name}`, this.httpOptions).pipe(
      map((data: any) => data), retry(1)
    )
  }

}
