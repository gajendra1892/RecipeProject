import { Component, Output , EventEmitter} from "@angular/core";
import { DataStorageService } from "../shared/data-storage.service";
import { Response } from "@angular/http";


@Component({
    selector:'app-header',
    templateUrl:'./header.component.html'
})

export class HeaderComponent {

    //after routing no need of this code
//    @Output() featureSelected = new EventEmitter<string>();
//    OnSelect(feature :string){
//         this.featureSelected.emit(feature);
//     }
constructor(private dataService:DataStorageService){}

onSaveData(){
this.dataService.storeRecipes()
.subscribe(
    (response)=>{
        console.log(response);
        
    }
);
}

onFetchData(){
    this.dataService.getRecipes();
}
}