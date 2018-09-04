import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { ToasterService } from '../../shared/toastr.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
 
  Email=null;
  Password=null;
  constructor(private authService :AuthService,private route:Router,private toast:ToasterService) { 
  
  }
  emailPattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  ngOnInit() {
  }

  onSignUp(form :NgForm){

    const email =form.value.email;
    const password=form.value.password;
    if(email=="" ||email==undefined ||password==undefined || password =="")
    {
        this.toast.Info("Please enter the credential.")
    }
    else
    {
    this.authService.signUpUser(email,password);
    this.route.navigate(["/recipes"]);
    this.toast.Success("User LoggedIn Successfully");
    }
  }
}
