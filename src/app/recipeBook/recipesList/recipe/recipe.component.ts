import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Recipe} from "../../recipe.model";

@Component({
    selector: 'recipe-item',
    templateUrl: 'recipe.component.html',
    styleUrls: ['recipe.component.css']
  })
  
  export class RecipeComponent {
    @Input() recipe: Recipe;
    @Output() recipeSelected = new EventEmitter<void>();
    //No need to pass recipe into eventEmitter as parent knows we are passing a recipe
    //As this component is called in a ngFor loop
    
    constructor() {
    }

    onSelected(){
        this.recipeSelected.emit();
    }
  }
  