
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { MoviesRoutingModule } from './movies-routing.module';
import { HOMEComponent } from './home/home.component';
//import { GenreComponent } from './genre/genre.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { CastDetailsComponent } from './cast-details/cast-details.component';
import { MovieComponent } from './movie-details/movie.component';
import { ReviewsComponent } from './reviews/reviews.component';
//import { AddGenreComponent } from './genre/add-genre/add-genre.component';
import { GenreModule } from './genre/genre.module';


@NgModule({
  declarations: [
    HOMEComponent,
   // GenreComponent,
    MovieDetailsComponent,
    MovieComponent,
    CastDetailsComponent,
    ReviewsComponent,
   // AddGenreComponent
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    RouterModule,
    GenreModule,
  ]
})
export class MoviesModule { }
