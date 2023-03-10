import { Component, Input } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { PokemonDetails } from 'src/app/Models/pokemon-details.model';

@Component({
  selector: 'app-poke-card',
  templateUrl: './poke-card.component.html',
  styleUrls: ['./poke-card.component.css']
})
export class PokeCardComponent {
    
    pokemonDetails!: PokemonDetails;
    @Input('pokemon') pokemon: any = { name: '', type: ''};
    constructor(private apiService: ApiService) {}

    ngOnInit(): void {
        this.apiService.getPokemonByName(this.pokemon.name).subscribe(result => {
            this.pokemonDetails = result;
        });
    }
}
