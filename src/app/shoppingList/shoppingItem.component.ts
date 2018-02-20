import { Component, Input } from '@angular/core';

@Component({
    selector: 'shopping-item',
    templateUrl: './shoppingItem.component.html',
    styleUrls: ['./shoppingItem.component.css']
  })
  
  export class ShoppingItemComponent {

    @Input() isEditable: boolean;

    constructor() {
      this.isEditable = false;
    }
  }
  