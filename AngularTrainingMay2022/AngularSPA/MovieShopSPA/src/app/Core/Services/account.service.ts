import { HttpClient } from '@angular/common/http';
import { Register } from './../../Shared/Models/register';
import { map, Observable } from 'rxjs';
import { UserLogin } from './../../Shared/Models/user-login';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http:HttpClient) { }

  Login(user:UserLogin):Observable<boolean>{
    return this.http.post('https://localhost:7241/api/Account/login', user).pipe(map((response:any) => {
      if (response){
        localStorage.setItem('token', response.token);
        return true;
      }
      return false;
    }))

  }

  Logout(){
    localStorage.removeItem('token');
  }

  Register(register:Register):Observable<boolean>{

    return this.http.post<boolean>( 'https://localhost:7241/api/Account/register',register)
  }



  
}
