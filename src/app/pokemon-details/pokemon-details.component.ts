import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonDetails } from '../Models/pokemon-details.model';
import { ApiService } from '../services/api.service';

@Component({
    selector: 'app-pokemon-details',
    templateUrl: './pokemon-details.component.html',
    styleUrls: ['./pokemon-details.component.css']
})
export class PokemonDetailsComponent {
    details: any = { name: '' };
    name = '';

    constructor(
        private apiService: ApiService,
        private activatedRoute: ActivatedRoute
    ) { }

    ngOnInit(): void {
        this.name = this.activatedRoute.snapshot.params['name'];
        this.apiService.getPokemonByName(this.name).subscribe(result => this.details = result)
        // console.log(this.name)
        // console.log('this is a ' + this.details.type + ' pokemon')

    }


    // pokemonMoves() {
    //     for (let i = 0; i < this.details.moves.move.namelength; i++) {
    //         const element = this.details.moves.move.name[i];
    //         return element;
    //     }
    // }

    getMove() {
        return this.details.moves && this.details.moves.length > 0 ? this.details.moves[0].move.name : ''
    }

    getType() {

        return this.details.types && this.details.types.length > 0 ? this.details.types[0].type.name : ''
    }

    get pokemonType(): string {
        return this.getType()

    }
}
