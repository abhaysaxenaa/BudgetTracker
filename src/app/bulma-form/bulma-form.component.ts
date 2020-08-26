import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BudgetItem } from 'shared/models/budget-item.model'

@Component({
  selector: 'app-bulma-form',
  templateUrl: './bulma-form.component.html',
  styleUrls: ['./bulma-form.component.scss']
})
export class BulmaFormComponent implements OnInit {

  @Input() item: BudgetItem = new BudgetItem('', null);
  @Output() formSubmit: EventEmitter<BudgetItem> = new EventEmitter<BudgetItem>();

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    this.formSubmit.emit(form.value);
    form.reset();
  }

}
