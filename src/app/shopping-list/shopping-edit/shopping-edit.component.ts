import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {IngredientModel} from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') name: ElementRef;
  @ViewChild('amountInput') amount: ElementRef;
  @Output() addnewIngrediants = new EventEmitter<IngredientModel>();
  constructor() { }

  ngOnInit() {
  }
  onAddItem() {
    const name = this.name.nativeElement.value;
    const amount = this.amount.nativeElement.value;
    console.log(name + amount);
    const ingrediant = new IngredientModel(name, amount);
    this.addnewIngrediants.emit(ingrediant);
  }

}
