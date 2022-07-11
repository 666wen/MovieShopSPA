import { Router } from '@angular/router';
import { AccountService } from 'src/app/Core/Services/account.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Shared/Models/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLoggedIn:boolean = false;
  currentUser:User;

  constructor(private accountService:AccountService, private _router:Router) { }

  ngOnInit(): void {
    this.accountService.isLoggedIn.subscribe(lg => {
      this.isLoggedIn = lg;
    });
    this.accountService.currentUser.subscribe(u => {
      this.currentUser = u;
    });
  }

  Logout(){
    this.accountService.Logout();
    this._router.navigateByUrl('/');
  }

}
