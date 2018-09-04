// import * as ShoppingListActions from  './shopping-list.actions';
// import { Ingredient } from '../../shared/ingredient.model';


// const initialstate={

//     ingredients : [
//         new Ingredient('Apples',5),
//         new Ingredient('Tomato',7),
//         new Ingredient('Orange',2)
//          ]
// };
// export function shoppingListReducer(state = initialstate , action:ShoppingListActions.ShoppingListActions){

//     switch(action.type)
//     {
//         case ShoppingListActions.ADD_INGREDIENT :
//         return  {
//         ...state,
//         ingredients:[...state.ingredients,action.payload]
//         }
//         default:
//         return state;
//     }
  
// }