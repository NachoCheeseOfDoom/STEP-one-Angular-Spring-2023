import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

import { ApiService } from './services/api.service';
import { MemeApiService } from './services/meme-api.service';

import { PokeListComponent } from './poke-list/poke-list.component';
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';
import { PokeCardComponent } from './components/poke-card/poke-card.component';
import { UpperCaseCustomPipe } from './pipes/upper-case-custom.pipe';
import { NewPageComponent } from './new-page/new-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TextLengthPipe } from './pipes/text-length.pipe';
import { MemeFrameComponent } from './components/meme-frame/meme-frame.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PokeListComponent,
    PokemonDetailsComponent,
    PokeCardComponent,
    UpperCaseCustomPipe,
    NewPageComponent,
    PageNotFoundComponent,
    TextLengthPipe,
    MemeFrameComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    ReactiveFormsModule
  ],
  providers: [ApiService, MemeApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
