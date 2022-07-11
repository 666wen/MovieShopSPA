import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AccountService } from '../Services/account.service';

@Injectable()
export class JwtAdderInterceptor implements HttpInterceptor {

  isLoggedIn:boolean;
  jwtToken!:string;
  constructor(private accountService:AccountService) {}
  
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.accountService.isLoggedIn.subscribe(data => {
      this.isLoggedIn = data;
    });
    if (this.isLoggedIn){
      this.jwtToken = localStorage.getItem('token')!;
      if (this.jwtToken != null) {
        return next.handle(request.clone( {setHeaders: {token: this.jwtToken}} )); //header  key:value 
      };
    }
    return next.handle(request);
  }
}
