import {Component} from '@angular/core';
import {Recipe} from "./recipes/recipe.model";
import {IngredientModel} from "./shared/ingredient.model";
import {RecipeService} from "./services/recipe.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [RecipeService]
})
export class AppComponent {
  selectedRecipe: Recipe;
  loadnavigate = '';

  onNavigate(feature: string) {
    this.loadnavigate = feature;
  }
}
