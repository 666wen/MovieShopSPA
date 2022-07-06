import { MovieCard } from './../../Shared/Models/movie-card';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';      //import this to use http request methods
import { Observable } from 'rxjs';                      //

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http:HttpClient) { }     //DI initiate a httpClient instance/object

  getTopGrossingMovies():Observable<MovieCard[]>{        //return type is Async type--observable
    return this.http.get<MovieCard[]>('https://localhost:7241/api/Movies/top-grossing')  //pay attention to this.  url is from API.
  }

  getMovieDetails(id:number){

  }
  getMoviesByGenre(genreId:number){

  }

}
