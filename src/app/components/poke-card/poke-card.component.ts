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
        const typeEl: any = document.getElementById('lower-text');
        this.apiService.getPokemonByName(this.pokemon.name).subscribe(result => {
            this.pokemonDetails = result;


            // if (this.getType() == 'bug') {
            //     card.style.backgroundColor = "green";
            //     // document.getElementById('card-id')!.style.color = 'red';
            //     console.log(this.pokemonDetails.name)
            // }



            // switch (this.getType()) {
            //     case 'grass':
            //         console.log(this.pokemonDetails.name)

            //         // typeEl.innerHTML = 'Grass'
            //         break;
            //     case 'fire':
            //         console.log(this.pokemonDetails.name)
            //         // typeEl.innerHTML = 'Fire'
            //         // card.style.backgroundColor = 'red';
            //         // console.log(this.getAbility())
            //         break;
            //     case 'water':

            //         break;
            //     case 'bug':
            //         // console.log(this.pokemonDetails.name)

            //         break;


            // }

        });

        // this.apiService.getPokemonByType(this.pokemon.types).subscribe(result => {
        //     this.pokemonDetails = result;
        // })

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

    changeColor() {
        if (this.getType() === 'fire') {
            let cardEl = document.getElementById('card-id');
            cardEl!.style.backgroundColor = "red";
        }
    }


    get pokemonType(): string {
        return this.getType()

    }

    // changeColor(type: String) {
    //     switch (type) {
    //         case 'grass':

    //             break;
    //         case 'fire':

    //             break;
    //         case 'water':

    //             break;
    //         case 'bug':
    //             let algo: String = document.getElementById('pokemon-type-id');
    //             algo.innerHTML != 'This is a bug';
    //             break;


    //     }
    // }

}
