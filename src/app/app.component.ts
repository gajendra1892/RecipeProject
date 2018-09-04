import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
 
  //loadedFeature ='recipe';

  // onNavigate(feature : string){
  // this.loadedFeature=feature;
  // }

  ngOnInit(){
firebase.initializeApp({
  apiKey: "AIzaSyDVG9T9KVoiA8-g2qgpgNk7I9qsl0fdZi0",
    authDomain: "ng-recipe-1ee35.firebaseapp.com"
});
  }
}
