import { Injectable } from '@angular/core';
import {Recipe} from "../recipes/recipe.model";
import {EventEmitter} from "@angular/core";
import {IngredientModel} from "../shared/ingredient.model";
import {ShoppingListService} from "./shopping-list.service";
//providedIn: 'root'

@Injectable()
export class RecipeService {

  selectedRecipe = new EventEmitter<Recipe>();

  constructor(private shoppingService: ShoppingListService) { }

  recipes: Recipe[] = [
    new Recipe('illish broyani', 'chilli food', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
      [new IngredientModel("chili", 12),
      new IngredientModel("chiken leg", 1)]),
    new Recipe('chickhen briyani', 'chilli food', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
      [new IngredientModel("chiken pis", 10),
        new IngredientModel("Rice/kg", 1)])
  ];

  getRecipes(){
    return this.recipes.slice();
  }

  addIngrediantsToShoppingList(ingrediants: IngredientModel[]){
    this.shoppingService.addIngredients(ingrediants);
  }
}
