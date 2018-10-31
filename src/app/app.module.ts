import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from "@angular/router";
import { AppComponent } from './app.component';

import { NotfoundComponent } from './notfound/notfound.component';
import { BookComponent } from './book/book.component';
import { CharacterComponent } from './character/character.component';
import { HouseComponent } from './house/house.component';
import { GotHomeComponent } from './got-home/got-home.component';
import { AllBooksComponent } from './all-books/all-books.component';
import { AllCharactersComponent } from './all-characters/all-characters.component';
import { AllHousesComponent } from './all-houses/all-houses.component';

import { GotdataService } from "./gotdata.service";

@NgModule({
  declarations: [
    AppComponent,
    NotfoundComponent,
    BookComponent,
    CharacterComponent,
    HouseComponent,
    GotHomeComponent,
    AllBooksComponent,
    AllCharactersComponent,
    AllHousesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'home', component: GotHomeComponent },
      { path: 'books', component: AllBooksComponent },
      { path: 'characters', component: AllCharactersComponent },
      { path: 'houses', component: AllHousesComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'books/:ID', component: BookComponent },
      { path: 'characters/:ID', component: CharacterComponent },
      { path: 'houses/:ID', component: HouseComponent },
      { path: '**', component: NotfoundComponent }
    ])
  ],
  providers: [GotdataService],
  bootstrap: [AppComponent]
})
export class AppModule { }