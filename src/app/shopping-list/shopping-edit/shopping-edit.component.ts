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

  @ViewChild('Form') shoppingListForm: NgForm;
  index: number;
  editMode = false;
  editedItem: IngredientModel;
  private idSubscribe: Subscription;

  constructor(private shoppingService: ShoppingListService) { }
  ngOnInit() {
    this.idSubscribe = this.shoppingService.startEditing.subscribe((index: number) =>{
      this.index = index;
      this.editMode = true;
      this.editedItem = this.shoppingService.getIngredient(index);
      this.shoppingListForm.setValue({
        name: this.editedItem.name,
        amount: this.editedItem.amount
      })
    });
  }

  onAddItem(Form: NgForm) {
    const value = Form.value;
    const ingredient = new IngredientModel(value.name, value.amount);
    if (this.editMode){
      this.shoppingService.updateIngredient(this.index, ingredient);
    }else {
      this.shoppingService.addNewingrediantAdded(ingredient);
    }
    this.shoppingListForm.reset();
    this.editMode = false;
  }

  onClear() {
    this.shoppingListForm.reset();
    this.editMode = false;
  }

  ngOnDestroy(): void {
    this.idSubscribe.unsubscribe();
  }

  onDelete() {
    this.shoppingService.deleteIngredient(this.index);
    this.onClear();
  }
}
