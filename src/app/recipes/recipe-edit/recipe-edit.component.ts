import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
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
  id: number;
  editMode = false;
  private subscription: Subscription;

  constructor(private route: ActivatedRoute,
              private recipeService: RecipeService) {
  }

  ngOnInit(): void {
    this.subscription = this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.editMode = params['id'] != null;
      this.initForm();
    });
  }

  onSubmit() {
    if (this.editMode){
      this.recipeService.updateRecipes(this.id, this.recipeForm.value);
    }else {
      this.recipeService.addRecipes(this.recipeForm.value);
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private initForm() {
    let recipeName = '';
    let recipeDescription = '';
    let recipeImagePath = '';
    let recipeIngredients = new FormArray([]);


    if (this.editMode) {
      const editRecipe = this.recipeService.getRecipe(this.id);
      recipeName = editRecipe.name;
      recipeDescription = editRecipe.description;
      recipeImagePath = editRecipe.imagePath;
      if (editRecipe['ingrediants']) {
        for (let ingrediant of editRecipe.ingrediants) {
          recipeIngredients.push(
            new FormGroup({
              'name': new FormControl(ingrediant.name, [Validators.required]),
              'amount': new FormControl(ingrediant.amount, [Validators.required,
                Validators.pattern(/^[1-9]+[0-9]*$/)])
            })
          );
        }
      }
    }

    this.recipeForm = new FormGroup({
      'name': new FormControl(recipeName, [Validators.required]),
      'description': new FormControl(recipeDescription, [Validators.required]),
      'imagePath': new FormControl(recipeImagePath, [Validators.required]),
      'ingrediants': recipeIngredients
    });
  }

  onAddingrediant() {
    (<FormArray>this.recipeForm.get('ingrediants')).push(
      new FormGroup({
        'name': new FormControl(null, [Validators.required]),
        'amount': new FormControl(null, [Validators.required,
          Validators.pattern(/^[1-9]+[0-9]*$/)])
      })
    )
  }
}
