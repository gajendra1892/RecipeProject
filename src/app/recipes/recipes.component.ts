import { Component, OnInit } from '@angular/core';
//import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  //recipeDetailobj :Recipe;
  //constructor(private recipeService:RecipeService) { }
  constructor(){}
  ngOnInit() {
    // this.recipeService.recipeSelected.subscribe(
    //   (recipe :Recipe)=>{
    //     this.recipeDetailobj=recipe
    //   }
    // );
  }

//   ShowRecipeDetails(selectedRecipe :Recipe){
//  this.recipeDetailobj =selectedRecipe;
//   }

}
