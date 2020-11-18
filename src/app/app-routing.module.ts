import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RecipesListComponent} from "./recipes/recipes-list/recipes-list.component";
import {ShoppingListComponent} from "./shopping-list/shopping-list.component";
import {StartrecipeComponent} from "./recipes/startrecipe/startrecipe.component";
import {RecipesDetailsComponent} from "./recipes/recipes-details/recipes-details.component";
import {HomeComponent} from "./home/home.component";


const routes: Routes = [
  {path: '' , component: HomeComponent},
  {path: 'recipes' , component: RecipesListComponent, children: [
      {path: '', component: StartrecipeComponent},
      {path: ':id', component: RecipesDetailsComponent}
    ]},
  {path: 'shoppinglists' , component: ShoppingListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
