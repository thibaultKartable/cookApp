import {Component, Output, EventEmitter, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
    selector: 'recipes',
    templateUrl: './recipes.component.html',
    styleUrls: ['./recipes.component.css']
})

export class RecipesComponent implements OnInit{

    selectedRecipe : Recipe;

    constructor() {

    }

    ngOnInit(): void {
    }

    showRecipe(recipe){
        this.selectedRecipe = recipe;
    }
}
