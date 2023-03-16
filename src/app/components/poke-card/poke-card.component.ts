import { Component, Input } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { PokemonDetails } from 'src/app/Models/pokemon-details.model';
import { NewPageComponent } from 'src/app/new-page/new-page.component';

@Component({
    selector: 'app-poke-card',
    templateUrl: './poke-card.component.html',
    styleUrls: ['./poke-card.component.css']
})
export class PokeCardComponent {

    pokemonDetails: PokemonDetails = { name: '', types: [] };
    @Input('pokemon') pokemon: any = { name: '' };
    // @Input('pokemon') pokemons: any = { types: '' };
    constructor(private apiService: ApiService) { }

    ngOnInit(): void {
        this.apiService.getPokemonByName(this.pokemon.name).subscribe(result => {
            this.pokemonDetails = result;
        });

        // this.apiService.getPokemonByType(this.pokemon.types).subscribe(result => {
        //     this.pokemonDetails = result;
        // })

        this.apiService.getPokemonList
    }

    getmove() {
        return this.pokemonDetails.moves && this.pokemonDetails.moves.length > 0 ? this.pokemonDetails.moves[0].move.name : ''
    }

}
