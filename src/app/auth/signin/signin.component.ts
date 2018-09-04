import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ToasterService } from '../../shared/toastr.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private authService :AuthService ,private route :Router,private toast :ToasterService) { }
  
  emailPattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  
  //@Output()  loggedIn = new EventEmitter<boolean>();

 
  ngOnInit() {
    
  }

  onSignIn(form :NgForm){
    const email =form.value.email;
    const password=form.value.password;
    if(email=="" ||email==undefined ||password==undefined || password =="")
    {
        this.toast.Info("Please enter the credential.")
    }
    else
    {
      this.authService.signInUser(email,password);
      this.route.navigate(["/recipes"]);
      this.toast.Success("User LoggedIn Successfully");
    }
 
    // if(this.authService.signInUser(email,password))
    // {
    //   this.route.navigate(["/recipes"]);
    // }
    // else{
    //   this.route.navigate(["/register"]);
    // }
  }
}
