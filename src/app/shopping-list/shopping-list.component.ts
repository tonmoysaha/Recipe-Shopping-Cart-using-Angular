import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {IngredientModel} from '../shared/ingredient.model';
import {ShoppingListService} from "../services/shopping-list.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {

  ingredients: IngredientModel[] = [];
  private destroyIngrediants: Subscription;
  constructor(private shoppingService: ShoppingListService) {
  }

  ngOnInit(): void{
    this.ingredients = this.shoppingService.getingredients();
    this.destroyIngrediants =  this.shoppingService.shoppinglistChanged.subscribe((ingrediants: IngredientModel[]) => {
      this.ingredients = ingrediants;
    })
  }

  ngOnDestroy(): void {
    this.destroyIngrediants.unsubscribe();
  }
}
