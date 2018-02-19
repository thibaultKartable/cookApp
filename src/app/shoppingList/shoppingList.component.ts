import { Component } from '@angular/core';

@Component({
    selector: 'shopping-list',
    templateUrl: './shoppingList.component.html',
    styleUrls: ['./shoppingList.component.css']
  })
  
  export class ShoppingListComponent {
    //public shoppingList:['carotte','maïs','choux'];
    public shoppingList:Object[] = [];

    constructor() {
      this.shoppingList = ['carotte','maïs','choux'];
    }
  }
  