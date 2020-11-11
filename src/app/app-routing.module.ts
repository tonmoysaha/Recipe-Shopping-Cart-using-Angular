import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RecipesListComponent} from "./recipes/recipes-list/recipes-list.component";
import {ShoppingListComponent} from "./shopping-list/shopping-list.component";


const routes: Routes = [
  {path: '' , component: RecipesListComponent},
  {path: 'recipes' , component: RecipesListComponent},
  {path: 'shoppinglists' , component: ShoppingListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
