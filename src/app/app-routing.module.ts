import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokeListComponent } from './poke-list/poke-list.component';
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';
import { NewPageComponent } from './new-page/new-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
    { path: 'home', component: PokeListComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'pokemon-details/:name', component: PokemonDetailsComponent },
    { path: 'new-page', component: NewPageComponent },
    { path: '**', component: PageNotFoundComponent },
    // { path: '**', component: PageNotFoundComponent },
]

@NgModule({
    imports: [RouterModule.forRoot(routes, { enableTracing: false })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
