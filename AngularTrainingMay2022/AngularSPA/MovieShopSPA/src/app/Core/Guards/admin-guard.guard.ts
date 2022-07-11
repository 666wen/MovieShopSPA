import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AccountService } from '../Services/account.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuardGuard implements CanActivate {

  isLoggedIn:boolean = false;
  isAdmin:boolean = false;

  constructor(private accountService:AccountService){ }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
        this.accountService.isLoggedIn.subscribe(data => {
        this.isLoggedIn = data;
      });
      this.accountService.currentUser.subscribe(data => {
        this.isAdmin = data.isAdmin;
      });
    if (localStorage.getItem('token') != null && this.isLoggedIn && this.isAdmin){
      return true;
    }
    else {
      return false;
    };

  }
  
}
