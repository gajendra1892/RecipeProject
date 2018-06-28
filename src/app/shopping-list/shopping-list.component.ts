import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
 // providers:[ShoppingListService]
})
export class ShoppingListComponent implements OnInit ,OnDestroy{

//   ingredients : Ingredient[]= [
// new Ingredient('Apples',5),
// new Ingredient('Tomato',7),
// new Ingredient('Orange',2)

//   ];
ingredients : Ingredient[];
private subscription :Subscription;
  constructor(private shoppingListService :ShoppingListService) { }

  ngOnInit() {
    this.ingredients=this.shoppingListService.getIngredient();
  this.subscription= this.shoppingListService.ingerdiantsChanged.subscribe(
    (ingredients :Ingredient[])=>{
      this.ingredients=ingredients
    }
  );
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

//   AddIngredient(ingredient:Ingredient){
//     this.ingredients.push(ingredient);
//  event.preventDefault();
//    }

onEditItem(index :number){
  this.shoppingListService.startEditing.next(index);

}
}
