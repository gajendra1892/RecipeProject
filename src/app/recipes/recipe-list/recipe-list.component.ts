import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit,OnDestroy {

  //@Output() recipeWasSelected = new  EventEmitter<Recipe>();
  // recipes : Recipe[] = [
  //   new Recipe('A Test Recipe' , 'This is simply a test' , 'https://www.maxpixel.net/static/photo/1x/Burgers-Burger-Chickpeas-Recipes-Food-Vegetables-2920072.jpg'),
  //   new Recipe('Another Test Recipe' , 'This is simply a test' , 'https://www.maxpixel.net/static/photo/1x/Burgers-Burger-Chickpeas-Recipes-Food-Vegetables-2920072.jpg')

  // ];
  recipes : Recipe[];

  subscription :Subscription;
  constructor(private recipeService :RecipeService ,private router :Router ,private activeRoute :ActivatedRoute) { }

  ngOnInit() {
    this.subscription = this.recipeService.recipesChanged.subscribe(
      (recipes :Recipe[])=>{
        this.recipes=recipes;
      }
    );
    this.recipes=this.recipeService.getRecipe();
  }

  // OnRecipeSelected(recipe :Recipe){
  //   this.recipeWasSelected.emit(recipe);
  // }

  addNewRecipe()
{
  this.router.navigate(['new'], { relativeTo :this.activeRoute});
}

ngOnDestroy(){
  this.subscription.unsubscribe();
}

}
