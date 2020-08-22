import { Component } from '@angular/core';
import {Recipe} from "./recipes/recipe.model";
import {IngredientModel} from "./shared/ingredient.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedRecipe: Recipe;
  loadnavigate = '';
  onNavigate(feature: string) {
    this.loadnavigate = feature;
  }
}
