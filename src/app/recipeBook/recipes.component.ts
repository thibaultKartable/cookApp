import { Component } from '@angular/core';

@Component({
    selector: 'recipes',
    templateUrl: './recipes.component.html',
    styleUrls: ['./recipes.component.css']
  })
  
  export class RecipesComponent {

    public recipesList:Object[] = [];

    constructor() {
      this.recipesList = ['Sauté de porc Thaï','Blanquette','TOurnedos Rossini'];
    }
  }
  