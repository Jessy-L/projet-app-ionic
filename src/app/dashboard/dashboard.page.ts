import { Component, OnInit } from '@angular/core';
import { getAuth, updateEmail, updatePassword, updateProfile } from 'firebase/auth';
import { AuthenticationService } from "../shared/authentication-service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  constructor(
    public authService: AuthenticationService
  ) { }

  user : any

  ngOnInit() {

    this.user = JSON.parse(localStorage.getItem('user'))

    console.log(this.user)

  }


  extractDataInput(){


    const auth = getAuth()

    let stock = [];

    let pseudo = (document.getElementById('pseudo') as HTMLInputElement ).value
    let email = (document.getElementById('email') as HTMLInputElement ).value
    let password = (document.getElementById('password') as HTMLInputElement ).value
    let confirmPassword = (document.getElementById('confirmPassword') as HTMLInputElement ).value


    updateProfile(auth.currentUser, {

      displayName: pseudo,
      photoURL: ""

    }).then( () =>{
      stock.push('Pseudo')
    }).catch((error) => {
      alert('Il y a eu un problème réessayer ulterieurement')
      console.error(error);
    })


    if(this.user.email != email){

      updateEmail(auth.currentUser, email).then( () =>{
        stock.push('Email')
      }).catch((error) => {
        alert('Il y a eu un problème réessayer ulterieurement')
        console.error(error);
      })

    }

    if(password != "" && password == confirmPassword){

      updatePassword(auth.currentUser, password).then( () =>{
        stock.push('Mot de passe')
      }).catch((error) => {
        alert('Il y a eu un problème réessayer ulterieurement')
        console.error(error);
      })

    }

    console.log(stock)

    if(stock.length != 0 ){

      if(stock.length > 1)
        alert(`Les modifications sur ${stock.toString()} ont bien été effectués`)
      else
        alert(`La modification sur ${stock.toString()} à bien était effectué`)

    }

  }


}
