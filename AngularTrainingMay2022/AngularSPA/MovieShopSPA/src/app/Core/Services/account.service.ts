import { HttpClient } from '@angular/common/http';
import { Register } from './../../Shared/Models/register';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { UserLogin } from './../../Shared/Models/user-login';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { User } from 'src/app/Shared/Models/user';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private currentUserSubject = new BehaviorSubject<any>({} as any);
  public currentUser = this.currentUserSubject.asObservable();

  private isLoggedInSubject = new BehaviorSubject<boolean>(false);
  public isLoggedIn = this.isLoggedInSubject.asObservable();

  jwtHelper = new JwtHelperService();

  constructor(private http:HttpClient) { }

  Login(user:UserLogin):Observable<boolean>{
    return this.http.post('https://localhost:7241/api/Account/login', user).pipe(map((response:any) => {
      if (response){
        localStorage.setItem('token', response.token);  //'key': value
        this.populateUserInfoFromToken();
        return true;
      }
      return false;
    }))

  }

  Logout(){
    localStorage.removeItem('token');
    this.currentUserSubject.next({} as User);
    this.isLoggedInSubject.next(false);
  }

  Register(register:Register):Observable<boolean>{

    return this.http.post<boolean>( 'https://localhost:7241/api/Account/register',register)
  }


  populateUserInfoFromToken(){
    var tokenValue = localStorage.getItem('token');

    if(tokenValue && !this.jwtHelper.isTokenExpired(tokenValue)){
      const decodedToken = this.jwtHelper.decodeToken(tokenValue);

      this.currentUserSubject.next(decodedToken);  //subject pull next value as current and multicast?
      this.isLoggedInSubject.next(true);
    };
  }

  
}
