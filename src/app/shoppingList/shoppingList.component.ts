import { Component } from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';

@Component({
    selector: 'shopping-list',
    templateUrl: './shoppingList.component.html',
    styleUrls: ['./shoppingList.component.css']
  })
  
  export class ShoppingListComponent {
    public shoppingList: Ingredient[] = [];
    public listIsEditable:boolean;

    constructor() {
      this.shoppingList = [
        new Ingredient('Carotte', 4),
        new Ingredient('Tomates', 3),
      ];
      this.listIsEditable = false;
    }

    editShoppingList() {
        this.listIsEditable = !this.listIsEditable;
    }
  }
  