import { Observable } from 'rxjs';
import { Genre } from './../../Shared/Models/genre';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GenreService {

  constructor(private http:HttpClient) { }

  getAllGenres():Observable<Genre[]>{
    return this.http.get<Genre[]>('https://localhost:7241/api/Genres');
  }

  addGenre(genre:Genre){
    return this.http.post('https://localhost:7241/api/Genres/add-genre', genre);   //post payload need to be an obj
  }

  deleteGenre(genreId:number){
    return this.http.delete('https://localhost:7241/api/Genres/delete-genre/'+genreId);
  }


}
