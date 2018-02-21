import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { ShoppingListComponent } from './shoppingList/shoppingList.component';
import { RecipesComponent } from './recipeBook/recipes.component';
import { RecipeDetailComponent } from './recipeBook/recipeDetail/recipeDetail.component';
import { RecipeComponent } from './recipeBook/recipe/recipe.component';
import { ShoppingEditComponent } from './shoppingList/shopping-edit/shopping-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ShoppingListComponent,
    RecipesComponent,
    RecipeDetailComponent,
    RecipeComponent,
    ShoppingEditComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
