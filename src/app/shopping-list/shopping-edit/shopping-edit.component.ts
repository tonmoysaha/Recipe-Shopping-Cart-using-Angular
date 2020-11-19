import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {IngredientModel} from '../../shared/ingredient.model';
import {ShoppingListService} from "../../services/shopping-list.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  constructor(private shoppingService: ShoppingListService) { }
  ngOnInit() {
  }

  onAddItem(Form: NgForm) {
    const value = Form.value;
    console.log(value.name + value.amount);
    const ingrediant = new IngredientModel(value.name, value.amount);
    this.shoppingService.addNewingrediantAdded(ingrediant);
  }

}
