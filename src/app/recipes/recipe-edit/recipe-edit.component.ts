import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ActivatedRoute, Params} from "@angular/router";
import {RecipeService} from "../../services/recipe.service";
import {Recipe} from "../recipe.model";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit, OnDestroy {

  recipeForm: FormGroup;
  private subscription: Subscription;

  id: number;
  editMode = false;
  editRecipe: Recipe;

  constructor(private route: ActivatedRoute,
              private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.subscription = this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.editMode = params['id'] != null;
      this.initForm();
    });
  }

  private initForm(){
    let recipeName = '';
    let recipeDescription = '';
    let recipeImagePath = '';

    if (this.editMode){
      this.editRecipe = this.recipeService.getRecipe(this.id);
      recipeName = this.editRecipe.name;
      recipeDescription = this.editRecipe.description;
      recipeImagePath = this.editRecipe.imagePath;
    }

    this.recipeForm = new FormGroup({
      'name': new FormControl(recipeName),
      'description': new FormControl(recipeDescription),
      'imagePath': new FormControl(recipeImagePath),
    });
  }

  onSubmit() {
    console.log(this.recipeForm);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
