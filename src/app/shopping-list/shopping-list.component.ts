import {Component, Input, OnInit} from '@angular/core';
import {IngredientModel} from '../shared/ingredient.model';
import {ShoppingListService} from "../services/shopping-list.service";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: IngredientModel[] = [];
  constructor(private shoppingService: ShoppingListService) {
  }
  ngOnInit(): void{
    this.ingredients = this.shoppingService.getingredients();
    this.shoppingService.shoppinglistChanged.subscribe((ingrediants: IngredientModel[]) => {
      this.ingredients = ingrediants;
    })
  }
}
