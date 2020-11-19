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

  addIngredients(ingrediants: IngredientModel[]){
    this.ingredients.push(...ingrediants);
    this.shoppinglistChanged.next(this.ingredients.slice());
  }
}
