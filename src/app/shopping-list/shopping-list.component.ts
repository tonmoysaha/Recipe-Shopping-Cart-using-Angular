import {Component, Input, OnInit} from '@angular/core';
import {IngredientModel} from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: IngredientModel[] = [];
  constructor() {
  }
  ngOnInit(): void {
  }

  onNewingrediantAdded(ingredientModel: IngredientModel) {

    this.ingredients.push(ingredientModel);
  }
}
