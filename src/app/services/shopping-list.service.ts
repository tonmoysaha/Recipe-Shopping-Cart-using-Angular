// import { Injectable } from '@angular/core';
//
// @Injectable({
//   providedIn: 'root'
// })
import {IngredientModel} from "../shared/ingredient.model";
import {Subject} from "rxjs";

export class ShoppingListService {

  shoppinglistChanged = new Subject<IngredientModel[]>();
  startEditing = new Subject<number>();
  private  ingredients: IngredientModel[] = [];

  constructor() { }

  addNewingrediantAdded(ingredientModel: IngredientModel) {
    this.ingredients.push(ingredientModel)
    this.shoppinglistChanged.next(this.ingredients.slice());
  }

  getingredients(){
    return this.ingredients.slice();
  }

  getIngredient(index: number){
    return this.ingredients[index];
  }

  addIngredients(ingredient: IngredientModel[]){
    this.ingredients.push(...ingredient);
    this.shoppinglistChanged.next(this.ingredients.slice());
  }

  updateIngredient(index: number , ingredient: IngredientModel){
    this.ingredients[index] = ingredient;
    return this.shoppinglistChanged.next(this.ingredients.slice());
  }

  deleteIngredient(index: number){
     this.ingredients.splice(index, 1);
     this.shoppinglistChanged.next(this.ingredients.slice());

  }
}
