import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
    selector: 'recipe-item',
    templateUrl: './recipe.component.html',
    styleUrls: ['./recipe.component.css']
  })
  
  export class RecipeComponent {
    @Input() recipe: Recipe;
    @Output() recipeSelected = new EventEmitter<Recipe>();
    
    constructor() {
    
    }

    selectRecipe(recipe){
        this.recipeSelected.emit(recipe);
    }
  }
  