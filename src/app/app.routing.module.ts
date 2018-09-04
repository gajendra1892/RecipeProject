import { Router, Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';


import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { AuthGuard } from './auth/auth.guards';


const appRoutes :Routes =[

    {
        // path :'' ,redirectTo :'/recipes' ,pathMatch :'full'
        path :'' ,redirectTo :'/register' ,pathMatch :'full'
    },
    {
        path : 'recipes',component :RecipesComponent,canActivate:[AuthGuard] ,children:[

            {
                path:'',component :RecipeStartComponent 
            },
            {
                path:'new',component :RecipeEditComponent
            },
            {
                path:':id',component :RecipeDetailComponent
            },
            {
                path:':id/edit',component :RecipeEditComponent
            }
        ]
    },
    {
        path :'shopping-list' ,component :ShoppingListComponent ,canActivate:[AuthGuard]
    }
    ,
    {
        path :'register' ,component:SignupComponent
    },
    {
        path :'login' ,component:SigninComponent
    },
    {
        //  path :'**' ,redirectTo :'/recipes'
        path :'**' ,redirectTo :'/register'
    }
];

@NgModule({
    imports :[
        RouterModule.forRoot(appRoutes)
    ],
    exports:[RouterModule]
})

export class AppRoutingModule {

}