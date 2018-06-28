import { Ingredient } from "../shared/ingredient.model";
import { EventEmitter } from "@angular/core";
import { Subject } from "rxjs";

export class ShoppingListService {

//ingerdiantsChanged=new EventEmitter<Ingredient[]>();
ingerdiantsChanged=new Subject<Ingredient[]>();

startEditing =new Subject<number>();

  private  ingredients : Ingredient[]= [
        new Ingredient('Apples',5),
        new Ingredient('Tomato',7),
        new Ingredient('Orange',2)
        
          ];

          getIngredient(){
              return this.ingredients.slice();  //if do addition it wont reflect
           
            //return this.ingredients;
          }

          getIngredients(index :number){
            return this.ingredients[index];

          }

          addIngredient(ingredient :Ingredient){

            this.ingredients.push(ingredient);
            // this.ingerdiantsChanged.emit(this.ingredients.slice());
            this.ingerdiantsChanged.next(this.ingredients.slice());
            //event.preventDefault();
          }

          addRecipeIngredients(ingredients :Ingredient[]){

            // for(let ingredient of ingredients)
            // this.addIngredient(ingredient);

            this.ingredients.push(...ingredients);
            // this.ingerdiantsChanged.emit(this.ingredients.slice());
            this.ingerdiantsChanged.next(this.ingredients.slice());
          }

          updateIngrediants(index : number,newIngredient :Ingredient){
            this.ingredients[index]=newIngredient,
            this.ingerdiantsChanged.next(this.ingredients.slice());
            }

            deleteIngrediant(index:number){
              this.ingredients.splice(index,1);
              this.ingerdiantsChanged.next(this.ingredients.slice());
            }
}