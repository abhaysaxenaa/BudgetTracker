import { Component, OnInit } from '@angular/core';
import { BudgetItem } from 'shared/models/budget-item.model';
import { CheckboxControlValueAccessor } from '@angular/forms';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  budgetItems: BudgetItem[] = new Array<BudgetItem>();
  calculateBudget: number = 0;
  str: String;

  constructor() { }

  ngOnInit(): void {
  }

  addItemToList(newItem: BudgetItem){
    this.budgetItems.push(newItem);
    this.calculateBudget += newItem.amount;
  }

  deleteItemFromList(item: BudgetItem){
    let index = this.budgetItems.indexOf(item);
    this.calculateBudget -= item.amount;
    this.budgetItems.splice(index, 1);
  }

}
