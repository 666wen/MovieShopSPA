import { AddGenreComponent } from './add-genre/add-genre.component';
import { GenreComponent } from './genre.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GenreRoutingModule } from './genre-routing.module';


@NgModule({
  declarations: [
    GenreComponent,
    AddGenreComponent
  ],
  imports: [
    CommonModule,
    GenreRoutingModule
  ]
})
export class GenreModule { }
