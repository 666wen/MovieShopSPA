import { AdminService } from './../../Core/Services/admin.service';
import { Movie } from './../../Shared/Models/movie';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-create-movie',
  templateUrl: './create-movie.component.html',
  styleUrls: ['./create-movie.component.css']
})
export class CreateMovieComponent implements OnInit {

  addMovieForm: FormGroup;
  submitted: boolean = false;
  movieItem:Movie;
  added:boolean=false;
  failed:boolean=false;
  constructor(private fb: FormBuilder, private adminService:AdminService) { }

  ngOnInit(): void {
    this.addMovieForm = this.fb.group({
      Title: ['', Validators.required],    // form control
      Overview: ['', Validators.required],
      Budget: 0,
      Revenue: ['', Validators.required],
      PosterUrl: ['', Validators.required],
      OriginalLanguage: 'unknown',
      ReleaseDate: ['', Validators.required],
      RunTime: 0,
      Price:['', Validators.required],
      CreatedDate: ['', Validators.required],
      CreatedBy: ['', Validators.required]
    }
    )
  }

  get addMovieFormControl() {
    return this.addMovieForm.controls;
  }

  onSubmit() { 
    this.submitted= true;
    if(this.addMovieForm.valid){
      console.table(this.addMovieForm.value)

      this.movieItem={
        Title: this.addMovieForm.controls['Title'].value,
        Overview:  this.addMovieForm.controls['Overview'].value,
        Budget:  this.addMovieForm.controls['Budget'].value,
        Revenue:  this.addMovieForm.controls['Revenue'].value,
        PosterUrl:  this.addMovieForm.controls['PosterUrl'].value,
        OriginalLanguage:  this.addMovieForm.controls['OriginalLanguage'].value,
        ReleaseDate:  this.addMovieForm.controls['ReleaseDate'].value,
        RunTime:  this.addMovieForm.controls['RunTime'].value,
        Price :  this.addMovieForm.controls['Price'].value,
        CreatedDate:  this.addMovieForm.controls['CreatedDate'].value,
        CreatedBy: this.addMovieForm.controls['CreatedBy'].value

      }

      this.adminService.createMovie(this.movieItem).subscribe(m=>{
        if (m){
          this.added = true;
        } else {
          this.failed = true;
        };
      })

    }
  }

}
