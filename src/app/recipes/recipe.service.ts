import { Recipe } from "./recipe.model";
import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Subject } from "rxjs";

//import { HttpClient } from "selenium-webdriver/http";
//import { Http } from "@angular/http";

@Injectable()
export class RecipeService{
    recipesChanged=new Subject<Recipe[]>();

  private  recipes : Recipe[] = [
        new Recipe(
            'Tasty Schnitzel' ,
             'A super-tasty Schnitzel - just awesome' ,
              'https://www.maxpixel.net/static/photo/1x/Burgers-Burger-Chickpeas-Recipes-Food-Vegetables-2920072.jpg',
            [
                new Ingredient('Meat',1),
                new Ingredient('French Fries',20)
            ]
            ),
        new Recipe(
            'Big Fat Burger' ,
             'What else you need to say?' ,
              'https://previews.123rf.com/images/magone/magone1511/magone151100012/47903492-fresh-tasty-burger-on-black-background.jpg',
            [
                new Ingredient('Buns',2),
                new Ingredient('French Fries',20),
                new Ingredient('Meat',1)
            ])
    
      ];

    //   constructor(private slService :ShoppingListService,private http :Http){}
     constructor(private slService :ShoppingListService){}

      //recipeSelected =new EventEmitter<Recipe>();  //as we are implementing same functionality by subject

setRecipes( recipes :Recipe[]){
 
    this.recipes=recipes;
    this.recipesChanged.next(this.recipes.slice());
}

      getRecipe(){
          return this.recipes.slice();
      }

      addIngredientToShoppingList(ingredients :Ingredient[]){
this.slService.addRecipeIngredients(ingredients);

      }

      getRecipeById(index:number){
          return this.recipes[index];
      }

      addRecipe(recipe :Recipe){
this.recipes.push(recipe);
this.recipesChanged.next(this.recipes.slice());
      }

      updateRecipe(index:number,newRecipe :Recipe){
this.recipes[index]=newRecipe;
this.recipesChanged.next(this.recipes.slice());
      }

      deleteRecipe(index :number){
          this.recipes.splice(index,1);
          this.recipesChanged.next(this.recipes.slice());
      }


     
}