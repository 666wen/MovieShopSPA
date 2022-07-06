import { MovieCard } from './../../Shared/Models/movie-card';
import { MovieService } from './../../Core/Services/movie.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HOMEComponent implements OnInit {

  movies!:MovieCard[];                       //if no ! will has error for needing initiate.
  constructor(private movieService:MovieService) { }  //DI

  ngOnInit(): void {
    this.movieService.getTopGrossingMovies().subscribe(m=> 
      { this.movies=m;
        //console.log(this.movies);
        console.table(this.movies);      //can use table to show array date.
      })
  }

}
