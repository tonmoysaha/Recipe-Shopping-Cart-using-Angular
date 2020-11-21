import { Injectable } from '@angular/core';
import {Recipe} from "../recipes/recipe.model";
import {IngredientModel} from "../shared/ingredient.model";
import {ShoppingListService} from "./shopping-list.service";
import {Subject} from "rxjs";
//providedIn: 'root'

@Injectable()
export class RecipeService {

  recipelistChanged = new Subject<Recipe[]>();

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

  getRecipe(index: number){
    return this.recipes[index];
  }

  addIngrediantsToShoppingList(ingrediants: IngredientModel[]){
    this.shoppingService.addIngredients(ingrediants);
  }

  addRecipes(newRecipe: Recipe){
     this.recipes.push(newRecipe);
     this.recipelistChanged.next(this.recipes.slice());
  }

  updateRecipes(index: number, updateRecipe: Recipe){
    this.recipes[index] = updateRecipe;
    this.recipelistChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number){
    this.recipes.splice(index, 1);
    this.recipelistChanged.next(this.recipes.slice());
  }
}
