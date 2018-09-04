import * as firebase from 'firebase';
import { Subject } from 'rxjs';
export class AuthService {

    loggedIn=new Subject<Boolean>();
    token :string;
    signUpUser(email :string ,password :string)
    {
        var body = {
            Email:email,
            Password:password
          }
        localStorage.clear();
        localStorage.setItem("participant",JSON.stringify(body));
        this.loggedIn.next(true);
        // firebase.auth().createUserWithEmailAndPassword(email,password)
        // .catch(
        //     error=>console.log(error)
        // )
    }

    signInUser(email :string ,password :string)
    {

        var body = {
            Email:email,
            Password:password
          }
        localStorage.clear();
        localStorage.setItem("participant",JSON.stringify(body));
        this.loggedIn.next(true);
      //  if(localStorage.getItem('participant')!=null)
       // {   
           // this.loggedIn.next(true);    
          //  return true ;
        // var  data = JSON.parse(localStorage.getItem('participant'));
        // if(data.Email == email && data.Password ==password)
        // return true; 
        // else
        // return false;  
       //  }
        //// else
        // this.loggedIn.next(false);   

   
        // firebase.auth().signInWithEmailAndPassword(email,password)
        // .then(
        //     response =>{
        //         firebase.auth().currentUser.getIdToken()
        //         .then(
        //             (token : string)=>this.token= token
        //         )
                
        //     }
        //    // response =>console.log(response)
        // )
        // .catch(
        //     error=>console.log(error)
        // )
        // console.log(this.token);
    }
logoutUser(){
    localStorage.clear();
    this.loggedIn.next(false);
   
}

    getToken(){
         firebase.auth().currentUser.getIdToken()
         .then(
            (token : string)=>this.token=token
        );
        return this.token;
        //return firebase.auth().currentUser.getIdToken();
    }
}