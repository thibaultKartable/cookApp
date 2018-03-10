import { Component } from '@angular/core';
import { Recipe } from './recipeBook/recipe.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  public selectedRecipe: Recipe;
  public activePage: 'recipes' | 'shoppingList';

  constructor() {
    this.activePage = 'recipes';
  }

  onRecipeSelected(recipe){
    this.selectedRecipe = recipe;
  }

  onChangePage(page) {
    this.activePage = page;
  }
}
