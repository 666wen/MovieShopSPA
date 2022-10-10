import { ExpenseService } from './../../Core/Services/expense.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'; 
import { Expense } from 'src/app/Shared/Models/expense';
import { Router } from '@angular/router';

@Component({
  selector: 'app-budget-planner',
  templateUrl: './budget-planner.component.html',
  styleUrls: ['./budget-planner.component.css']
})
export class BudgetPlannerComponent implements OnInit {

   expenses: Expense[]=[
    {Name:"Fuel",Cost:500},
    {Name:"Food",Cost:400},
    {Name:"Rent",Cost:500},
    {Name:"Electric",Cost:400}
   ]

   addExpenseForm:FormGroup;
   addedExpense: Expense;
   added:boolean;
   budget:number = 5000;
   remaining:number ;
   spent:number=0;

   constructor(private fb: FormBuilder, private expenseService: ExpenseService) { }

   ngOnInit(): void {
    this.addExpenseForm = this.fb.group({
      Name:['', Validators.required],
      Cost:['', Validators.required]
    }
    )


    for(var c of this.expenses){
      this.spent+=c.Cost;
    }
    this.remaining=this.budget-this.spent;


   }

  get registerFormControl() {
    return this.addExpenseForm.controls;
  }



  onSubmit(){
    if (this.addExpenseForm.valid) {

      this.addedExpense={
        Name: this.addExpenseForm.controls['Name'].value,
        Cost: this.addExpenseForm.controls['Cost'].value,
      }

      this.expenseService.AddExpense(this.addedExpense).subscribe(r=>{
        if (r){
          this.added = true;
        }}
      )
    }

  }


  clicked(i:number){
    this.spent+=this.expenses[i].Cost;
    this.remaining=this.budget-this.spent;
    this.expenses.splice(i,1);
    

   }

  
 

}
