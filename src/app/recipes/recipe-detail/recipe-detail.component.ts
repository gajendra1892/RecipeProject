import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ShoppingListService } from '../../shopping-list/shopping-list.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  //@Input() recipeDetailItem :Recipe; //after routing
  
  recipeDetailItem :Recipe;
  id :number;
  constructor(private recipeService :RecipeService,private slService:ShoppingListService,private route :ActivatedRoute ,private router :Router) { }

  ngOnInit() {
    //after routing
   this.route.params.subscribe(
     (param :Params)=>{
       this.id = +param['id'];
       this.recipeDetailItem =this.recipeService.getRecipeById(this.id);
     }
   );
   
  }

  onAddToShoppingList(){
   // this.slService.addRecipeIngredients(this.recipeDetailItem.ingredients);
this.recipeService.addIngredientToShoppingList(this.recipeDetailItem.ingredients);
  }

  onRecipeEdit(){
   // this.router.navigate(['edit'] ,{relativeTo :this.route});
     this.router.navigate(['../',this.id,'edit'] ,{relativeTo :this.route});
       }

  onRecipeDelete(){
    this.recipeService.deleteRecipe(this.id);
    this.router.navigate(['../'],{relativeTo:this.route});
  }
}
