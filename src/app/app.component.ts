import { Component } from '@angular/core';

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { AuthenticationService } from "./shared/authentication-service";
import { getAuth, updateEmail, updatePassword, updateProfile } from 'firebase/auth';




@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  isLoggedIn : any

  constructor(

    public AuthenticationService : AuthenticationService

    ) {

      const firebaseConfig = {

        apiKey: "AIzaSyAd9PdgF-lJjg3lBZTZGJGUE7BBAb9jV0c",
        authDomain: "mamapmonde.firebaseapp.com",
        projectId: "mamapmonde",
        storageBucket: "mamapmonde.appspot.com",
        messagingSenderId: "669266300538",
        appId: "1:669266300538:web:d533c8fd5c91e396f035c3",
        measurementId: "G-7ZW1T791JH"

      }

      const app = initializeApp( firebaseConfig );
      const analytics = getAnalytics(app)
    }


    ngOnInit(): void {
      this.dropdown()

      // this.isLoggedIn =

      console.log(this.isLoggedIn)

    }

  dropdown(){

    const content = (document.getElementById('dropdown-custom') as HTMLDivElement).style ;
    content.display != "none" ? content.display = "none" : content.display = "flex"

  }

  closeMenu(){
    document.getElementById('btn-cross').click()
  }

}



