// import { Injectable } from '@angular/core';
//
// @Injectable({
//   providedIn: 'root'
// })
import {Recipe} from "../recipes/recipe.model";

export class RecipeService {

  constructor() { }

  recipes: Recipe[] = [
    new Recipe('illish broyani', 'chilli food', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
    new Recipe('chickhen broyani', 'chilli food', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg')
  ];

  getRecipes(){
    return this.recipes.slice();
  }
}
