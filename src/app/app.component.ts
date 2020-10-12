import {Component, OnInit} from '@angular/core';
import {Recipe} from "./recipes/recipe.model";
import {IngredientModel} from "./shared/ingredient.model";
import {RecipeService} from "./services/recipe.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [RecipeService]
})
export class AppComponent implements OnInit{
  selectedRecipe: Recipe;
  loadnavigate = '';

  constructor(private recipeservice: RecipeService){}

  onNavigate(feature: string) {
    this.loadnavigate = feature;
  }

  ngOnInit(): void {
    this.recipeservice.selectedRecipe.subscribe((recipe: Recipe) => {
      this.selectedRecipe = recipe;
    } )
  }
}
