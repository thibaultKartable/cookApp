import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { ShoppingListComponent } from './shoppingList/shoppingList.component';
import { ShoppingItemComponent } from './shoppingList/shoppingItem.component';
import { RecipesComponent } from './recipeBook/recipes.component';
import { RecipeComponent } from './recipeBook/recipe.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ShoppingListComponent,
    ShoppingItemComponent,
    RecipesComponent,
    RecipeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
