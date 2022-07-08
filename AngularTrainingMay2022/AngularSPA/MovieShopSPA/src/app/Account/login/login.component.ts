import { Router } from '@angular/router';
import { UserLogin } from './../../Shared/Models/user-login';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AccountService } from 'src/app/Core/Services/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  flag: boolean = false;
  user: UserLogin;
  email: string;
  password: string;
  constructor(private accountService: AccountService, private _router:Router) { }

  ngOnInit(): void {
  }


  login(loginForm: NgForm) {
    this.user = {
      Email: loginForm.value.email,
      Password: loginForm.value.password
    }

    this.accountService.Login(this.user).subscribe(u => {
      console.log(u)
      if (u){
        this.flag = true;
        setTimeout(() => {
          this._router.navigateByUrl('/'); //back to home
        }, 5000);
      }
    })

  }

  resetForm(loginForm: NgForm) {
    loginForm.resetForm();
  }

}
