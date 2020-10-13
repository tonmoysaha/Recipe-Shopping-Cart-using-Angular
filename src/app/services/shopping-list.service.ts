// import { Injectable } from '@angular/core';
//
// @Injectable({
//   providedIn: 'root'
// })
import {IngredientModel} from "../shared/ingredient.model";
import {EventEmitter} from "@angular/core";

export class ShoppingListService {

  shoppinglistChanged = new EventEmitter<IngredientModel[]>();
  private  ingredients: IngredientModel[] = [];

  constructor() { }

  addNewingrediantAdded(ingredientModel: IngredientModel) {
    this.ingredients.push(ingredientModel)
    this.shoppinglistChanged.emit(this.ingredients.slice());
  }

  getingredients(){
    return this.ingredients.slice();
  }

  addIngredients(ingrediants: IngredientModel[]){
    this.ingredients.push(...ingrediants);
    this.shoppinglistChanged.emit(this.ingredients.slice());
  }
}
