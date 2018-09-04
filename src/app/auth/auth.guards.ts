import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { ToasterService } from '../shared/toastr.service';

@Injectable()
export class AuthGuard implements CanActivate {
constructor(private router:Router ,private toastr:ToasterService){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
     if(localStorage.getItem('participant')!=null)
  {  
      // this.toastr.Success("User LoggedIn Successfully");
       return true;
  }
    else
    {
     this.toastr.Warning("Please Login/Register");
    this.router.navigate(['/register']);
    return false;
    }
  }
}
