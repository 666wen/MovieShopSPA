import { Observable } from 'rxjs';
import { Movie } from './../../Shared/Models/movie';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }

  createMovie(movie:Movie):Observable<boolean>{
    return this.http.post<boolean>('https://localhost:7241/api/Admin/add-movie', movie)

  }

  createCast(){

  }

  getTopPurchases(){
    
  }
}
