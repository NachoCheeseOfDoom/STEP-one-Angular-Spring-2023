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
        const card: any = document.querySelector('.card');
        this.apiService.getPokemonByName(this.pokemon.name).subscribe(result => {
            this.pokemonDetails = result;
        });
        this.apiService.getPokemonList
    }

    getMove() {
        return this.pokemonDetails.moves && this.pokemonDetails.moves.length > 0 ? this.pokemonDetails.moves[0].move.name : ''
    }
    getType() {

        return this.pokemonDetails.types && this.pokemonDetails.types.length > 0 ? this.pokemonDetails.types[0].type.name : ''
    }
    getAbility() {

        return this.pokemonDetails.abilities && this.pokemonDetails.abilities.length > 0 ? this.pokemonDetails.abilities[0].ability.name : ''
    }

    textHere(text: string) {
        return text
    }


    get pokemonType(): string {
        return this.getType()

    }

}
