import { Component, OnInit, ViewChild, Output, EventEmitter, ElementRef, OnDestroy } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnDestroy,OnInit {

  subscription :Subscription;
  editMode =false;
  editedItemIndex:number;
  editItem :Ingredient;
  @ViewChild('form') slForm :NgForm;
  @ViewChild('nameInput')  name : ElementRef;
  @ViewChild('amountInput')  amount : ElementRef;
  
  //@Output()  addIngredient= new EventEmitter<Ingredient>();
  constructor(private slService :ShoppingListService) { }

  ngOnInit() {
  this.subscription=  this.slService.startEditing.subscribe(
    (index :number)=>{
      this.editedItemIndex=index;
      this.editMode=true;
      this.editItem=this.slService.getIngredients(index);
this.slForm.setValue({
name:this.editItem.name,
amount:this.editItem.amount
});
    }
  );
  }



  OnAdd( amount : HTMLInputElement){
    const ingName=this.name.nativeElement.value;
    // const ingAmount=parseInt(amount.value);
    const ingAmount=this.amount.nativeElement.value;
    const ingerdient= new Ingredient(ingName,ingAmount);
   // this.addIngredient.emit(ingerdient);
this.slService.addIngredient(ingerdient);
  }

  onAddItem(form :NgForm){
 const value =form.value;
 const ingerdient = new Ingredient(value.name ,value.amount);
 if(this.editMode){
  this.slService.updateIngrediants(this.editedItemIndex,ingerdient);
}
else{
 this.slService.addIngredient(ingerdient);
}
this.editMode=false;
form.reset();
  }
  onDeleteItem(){
    this.slService.deleteIngrediant(this.editedItemIndex);
    this.onClear();
    
  }

  onClear(){
    this.slForm.reset();
    this.editMode=false;
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
