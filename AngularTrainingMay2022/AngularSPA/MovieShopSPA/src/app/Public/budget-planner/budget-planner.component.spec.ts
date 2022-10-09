import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetPlannerComponent } from './budget-planner.component';

describe('BudgetPlannerComponent', () => {
  let component: BudgetPlannerComponent;
  let fixture: ComponentFixture<BudgetPlannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BudgetPlannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BudgetPlannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
