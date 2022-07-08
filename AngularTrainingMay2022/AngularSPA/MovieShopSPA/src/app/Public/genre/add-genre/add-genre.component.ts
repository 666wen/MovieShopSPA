import { GenreService } from 'src/app/Core/Services/genre.service';
import { Component, OnInit } from '@angular/core';
import { Genre } from 'src/app/Shared/Models/genre';
import { NgForm , FormsModule} from '@angular/forms';

@Component({
  selector: 'app-add-genre',
  templateUrl: './add-genre.component.html',
  styleUrls: ['./add-genre.component.css']
})
export class AddGenreComponent implements OnInit {

  name:string=''
  tnc:boolean=false
  flag:boolean=false
  genre:Genre={id: 0, name: ""}

  constructor(private genreService:GenreService) { }

  ngOnInit(): void {
  }

  addGenre(genreForm:NgForm){
    this.genre.name = genreForm.value.name;
    this.genreService.addGenre(this.genre).subscribe(g => {
      this.flag = true;
      console.log(g)
    })
  }

  resetForm(genreForm:NgForm){
    genreForm.resetForm();
  }

}
