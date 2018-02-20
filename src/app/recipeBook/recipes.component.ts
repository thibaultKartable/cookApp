import { Component} from '@angular/core';

@Component({
    selector: 'recipes',
    templateUrl: './recipes.component.html',
    styleUrls: ['./recipes.component.css']
  })
  
  export class RecipesComponent {

    public recipesList:Object[] = [];

    constructor() {
      this.recipesList = [
        {
          name : 'Sauté de porc Thaï',
          description : 'Une personne m\'a rapporté de Thaïlande, de la pâte de curry rouge (rouge = fort ). Gourmand comme je suis, j\'ai voulu y gouter le jour même. Petit détour au marché, pour vous préparer une recette "endiablée"',
          link : '',
          ingredients : ['veau', 'celeri', 'carotte', 'sel', 'poivre'],
          makingTime : 45,
          cookingTime : 45
        },
        {
          name : 'Tournedos Rossini',
          description : 'Une personne m\'a rapporté de Thaïlande, de la pâte de curry rouge (rouge = fort ). Gourmand comme je suis, j\'ai voulu y gouter le jour même. Petit détour au marché, pour vous préparer une recette "endiablée"',
          link : '',
          ingredients : ['veau', 'celeri', 'carotte', 'sel', 'poivre'],
          makingTime : 45,
          cookingTime : 45
        },
        {
          name : 'Tendrons de veau Carottes',
          description : 'Une personne m\'a rapporté de Thaïlande, de la pâte de curry rouge (rouge = fort ). Gourmand comme je suis, j\'ai voulu y gouter le jour même. Petit détour au marché, pour vous préparer une recette "endiablée"',
          link : '',
          ingredients : ['veau', 'celeri', 'carotte', 'sel', 'poivre'],
          makingTime : 45,
          cookingTime : 45
        },
      ];
    }

    addIngredientsToList(ingredients) {
      const shoppingList = document.querySelector('.shopping-list');
      ingredients.forEach(ingredient => {
        let item = document.createElement('li');
            item.classList.add('list-group-item');
            item.innerHTML = ingredient;
        shoppingList.appendChild(item);
      });
    }
  }
  