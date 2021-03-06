import {Component, Output, EventEmitter, OnInit} from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipesList.component.html',
  styleUrls: ['./recipesList.component.css']
})
export class RecipesListComponent implements OnInit {

  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  public recipesList: Recipe[] = [
    new Recipe('Crevette mangue', 'Délicioso', 'https://s2.qwant.com/thumbr/0x0/7/b/523b636e1cbb8d06e2c471ecbe9b56/b_1_q_0_p_0.jpg?u=http%3A%2F%2Fwww.cotedasie.nc%2Fwp-content%2Fuploads%2F2014%2F09%2FSATEFINAL4.jpg&q=0&b=1&p=0&a=1'),
    new Recipe('Poulet Saté', 'Super bon poulet', 'https://s2.qwant.com/thumbr/0x0/7/b/523b636e1cbb8d06e2c471ecbe9b56/b_1_q_0_p_0.jpg?u=http%3A%2F%2Fwww.cotedasie.nc%2Fwp-content%2Fuploads%2F2014%2F09%2FSATEFINAL4.jpg&q=0&b=1&p=0&a=1'),
    new Recipe('Poulet Coco', 'Twé twé bon poulet', 'https://s2.qwant.com/thumbr/0x0/7/b/523b636e1cbb8d06e2c471ecbe9b56/b_1_q_0_p_0.jpg?u=http%3A%2F%2Fwww.cotedasie.nc%2Fwp-content%2Fuploads%2F2014%2F09%2FSATEFINAL4.jpg&q=0&b=1&p=0&a=1')
  ];

  constructor() {

  }

  ngOnInit(): void {
    this.recipeWasSelected.emit(this.recipesList[0]);
  }

  onRecipeSelected(recipe) {
    this.recipeWasSelected.emit(recipe);
  }


}
