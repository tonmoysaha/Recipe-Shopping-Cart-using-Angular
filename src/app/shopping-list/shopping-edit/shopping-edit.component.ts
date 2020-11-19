import {Component, ElementRef, EventEmitter, OnDestroy, OnInit, Output, ViewChild} from '@angular/core';
import {IngredientModel} from '../../shared/ingredient.model';
import {ShoppingListService} from "../../services/shopping-list.service";
import {NgForm} from "@angular/forms";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {

  index: number;
  editMode = false;
  private idSubscribe: Subscription;

  constructor(private shoppingService: ShoppingListService) { }
  ngOnInit() {
    this.idSubscribe = this.shoppingService.startEditing.subscribe((index: number) =>{
      this.index = index;
      this.editMode = true;
    })
  }

  onAddItem(Form: NgForm) {
    const value = Form.value;
    console.log(value.name + value.amount);
    const ingrediant = new IngredientModel(value.name, value.amount);
    this.shoppingService.addNewingrediantAdded(ingrediant);
  }

  ngOnDestroy(): void {
    this.idSubscribe.unsubscribe();
  }

}
