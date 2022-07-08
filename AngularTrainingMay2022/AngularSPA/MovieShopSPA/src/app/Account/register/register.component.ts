import { AccountService } from 'src/app/Core/Services/account.service';
import { Register } from './../../Shared/Models/register';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RegisterValidationServiceService } from 'src/app/Core/Custom-Validators/register-validation-service.service';
import { Router } from '@angular/router';

//import { ReactiveFormsModule, NgForm } from '@angular/forms';   --used by html template, imported in account.module.ts

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  submitted: boolean = false;
  registered:boolean = false;
  failed:boolean = false;
  registration:Register;
  constructor(private fb: FormBuilder, private customValidator: RegisterValidationServiceService, private accountService: AccountService, private _router: Router) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      FirstName: ['', Validators.required],    // form control
      LastName: ['', Validators.required],
      Email: ['', [Validators.required, Validators.email]],
      Password: ['', Validators.compose([Validators.required, this.customValidator.patternValidator()])],
      confirmPassword: ['', Validators.required],
      DateOfBirth: ['', Validators.required],
    },
    
      {
        validator: this.customValidator.MatchPassword('Password', 'confirmPassword'),
      });
  }

  get registerFormControl() {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.valid) {
      console.table(this.registerForm.value);

      this.registration={
        email: this.registerForm.controls['Email'].value,
        password: this.registerForm.controls['Password'].value,
        lastName: this.registerForm.controls['LastName'].value,
        firstName: this.registerForm.controls['FirstName'].value,
        dateOfBirth: this.registerForm.controls['DateOfBirth'].value,
      }

      this.accountService.Register(this.registration).subscribe(r=>{
        if (r){
          this.registered = true;
          setTimeout(() => {
            this._router.navigateByUrl('/Account/Login');
          }, 5000);
        } else {
          this.failed = true;
        };
      })

    }
  }
}
