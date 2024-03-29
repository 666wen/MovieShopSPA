import { BehaviorSubject,Observable } from 'rxjs';
import { Expense } from './../../Shared/Models/expense';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {


  constructor(private http:HttpClient) { }

  AddExpense(expense:Expense):Observable<boolean>{

    return this.http.post<boolean>( 'https://localhost:7241/api/Account/register', expense)
  }



}
