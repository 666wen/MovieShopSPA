
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
import { BudgetPlannerComponent } from './budget-planner/budget-planner.component';

//import { AddGenreComponent } from './genre/add-genre/add-genre.component';
import { GenreModule } from './genre/genre.module';

import { ReactiveFormsModule} from '@angular/forms';




@NgModule({
  declarations: [
    HOMEComponent,
   // GenreComponent,
    MovieDetailsComponent,
    MovieComponent,
    CastDetailsComponent,
    ReviewsComponent,
    BudgetPlannerComponent,

   // AddGenreComponent
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    RouterModule,
    GenreModule,
    ReactiveFormsModule
  ]
})
export class MoviesModule { }
