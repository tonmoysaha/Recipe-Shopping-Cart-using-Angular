import {Component, OnInit} from '@angular/core';
import {Recipe} from "./recipes/recipe.model";
import {IngredientModel} from "./shared/ingredient.model";
import {RecipeService} from "./services/recipe.service";
import {ShoppingListService} from "./services/shopping-list.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [RecipeService]
})
export class AppComponent implements OnInit{

  constructor(){}

  ngOnInit(): void {
  }
}
