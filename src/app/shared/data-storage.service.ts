import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { RecipeService } from "../recipes/recipe.service";
import { Recipe } from "../recipes/recipe.model";
import { map } from 'rxjs/operators';
import 'rxjs/Rx';
import { AuthService } from "../auth/auth.service";

@Injectable()
export class DataStorageService{

    constructor(private http  :Http ,private recipeService:RecipeService,private authService :AuthService){}

 storeRecipes(){
 return this.http.put('https://ng-recipe-1ee35.firebaseio.com/recipes.json',this.recipeService.getRecipe());

 }

 //incase if property of model is not present it should give error but the below code is not generating any error got for 2nd approach
 getRecipes(){
  this.http.get('https://ng-recipe-1ee35.firebaseio.com/recipes.json')
  .subscribe(
      (response :Response)=>{
          const recipe :Recipe[] = response.json();
      this.recipeService.setRecipes(recipe);
        }
  );
 } 

// getRecipes(){
          
//       const token= this.authService.getToken();
            
// console.log("data"+token);
//     this.http.get('https://ng-recipe-1ee35.firebaseio.com/recipes.json?='+token)
//     .map(
//         (response:Response)=>{
//             const recipes :Recipe[] = response.json();
//         for(let recipe of recipes)
//         {
//             if(!recipe['ingredients'])
//             {
//                 console.log(recipe);
//                 recipe['ingredients']=[];   
//             }
//         }
//         return recipes;
//         }
//     )
//     .subscribe(
//         (recipes :Recipe[])=>{
//            // const recipe :Recipe[] = response.json();
//         this.recipeService.setRecipes(recipes);
//           }
//     );
//    } 

    
}