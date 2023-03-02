import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.css']
})
export class PokeListComponent {
    constructor(private apiService: ApiService) {}
    pokemons: any[] = [];

    ngOnInit(): void {
        this.apiService.getPokemonList().subscribe(
            (list: any[]) => this.pokemons = list
        )
    }
}
