import { Component } from '@angular/core';

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
          link : ''
        },
        {
          name : 'Tournedos Rossini',
          description : 'Une personne m\'a rapporté de Thaïlande, de la pâte de curry rouge (rouge = fort ). Gourmand comme je suis, j\'ai voulu y gouter le jour même. Petit détour au marché, pour vous préparer une recette "endiablée"',
          link : ''
        },
        {
          name : 'Tendrons de veau Carottes',
          description : 'Une personne m\'a rapporté de Thaïlande, de la pâte de curry rouge (rouge = fort ). Gourmand comme je suis, j\'ai voulu y gouter le jour même. Petit détour au marché, pour vous préparer une recette "endiablée"',
          link : ''
        },
      ];
    }
  }
  