import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BudgetItem } from 'shared/models/budget-item.model';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {

  @Input() singularItem: BudgetItem[];
  @Output() clear: EventEmitter<BudgetItem> = new EventEmitter<BudgetItem>();
    
  constructor() { }

  ngOnInit(): void {
  }

  clearItem(item: BudgetItem){
    this.clear.emit(item);
  }

}
