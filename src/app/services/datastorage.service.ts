import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {RecipeService} from "./recipe.service";

@Injectable({
  providedIn: 'root'
})
export class DatastorageService {

  constructor(private http: HttpClient,
              private recipeService: RecipeService) { }

  dataStorage(){
    const recipes = this.recipeService.getRecipes();
    return this.http.put('https://recipe-a9715.firebaseio.com/recipes.json', recipes)
      .subscribe(response => {
        console.log(response);
      });
  }


}

