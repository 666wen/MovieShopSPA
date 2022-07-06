import { Genre } from './../../Shared/Models/genre';
import { Component, OnInit } from '@angular/core';
import { GenreService } from 'src/app/Core/Services/genre.service';

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.css']
})
export class GenreComponent implements OnInit {

  genres!:Genre[];
  deleteFlag:boolean=false;

  constructor(private genreService:GenreService) { }

  ngOnInit(): void {
    this.genreService.getAllGenres().subscribe(g =>{
      this.genres= g;
      console.table(this.genres);
    })
  }

  deleteGenre(id:number){
     this.genreService.deleteGenre(id).subscribe(p => {
      this.deleteFlag = p? true:false;
     })
    //this.deleteFlag = true;
  }

}
