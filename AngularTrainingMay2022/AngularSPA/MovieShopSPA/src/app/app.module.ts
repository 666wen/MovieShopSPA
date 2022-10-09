import { JwtAdderInterceptor } from './Core/Interceptors/jwt-adder.interceptor';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FormsModule } from '@angular/forms';
import { CoreModule } from './Core/core.module';
import { SharedModule } from './Shared/shared.module';
import { MoviesModule } from './Public/movies.module';
import { GenreModule } from './Public/genre/genre.module';

import { RouterModule } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';  //import this for service using http request methods.
//import { BugetPlannerComponent } from './Public/buget-planner/buget-planner.component';



@NgModule({
  declarations: [
    AppComponent
    //BugetPlannerComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    CoreModule,
    SharedModule,
    FormsModule,
    MoviesModule,
    RouterModule,
    HttpClientModule,
    GenreModule,

  ],
  providers: [JwtAdderInterceptor],
  bootstrap: [AppComponent]
})
export class AppModule { }
