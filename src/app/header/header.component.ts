import { Component, Output , EventEmitter, OnInit, DoCheck} from "@angular/core";
import { DataStorageService } from "../shared/data-storage.service";
import { Response } from "@angular/http";
import { Router } from "@angular/router";
import { AuthService } from "../auth/auth.service";
import { Subscription } from "rxjs";
import { ToasterService } from "../shared/toastr.service";


@Component({
    selector:'app-header',
    templateUrl:'./header.component.html'
})

export class HeaderComponent implements DoCheck {

    //after routing no need of this code
//    @Output() featureSelected = new EventEmitter<string>();
//    OnSelect(feature :string){
//         this.featureSelected.emit(feature);
//     }
constructor(private dataService:DataStorageService,private route :Router,private auth:AuthService ,private toastr :ToasterService){}

subscribe:Subscription;
loggedIn :boolean;
ngDoCheck(){
    this.subscribe =this.auth.loggedIn.subscribe(( res :boolean)=>{
     this.loggedIn =res
     });
}

onSaveData(){
this.dataService.storeRecipes()
.subscribe(
    (response:Response)=>{
        console.log(response);
        
    }
);
this.toastr.Success("Recipe Save Successfully");
}

onFetchData(){
    this.dataService.getRecipes();
    this.toastr.Success("Recipes Retrieve Successfully");
}

logout(){
    this.auth.logoutUser();
    this.route.navigate(['/login']);
    this.toastr.Success("User Logout Successfully");
}
}

