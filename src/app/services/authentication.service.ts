import { Injectable, NgZone } from '@angular/core';

import { User } from "../../app/model/user";
import { Router } from "@angular/router";
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  constructor(
    public afStore: AngularFirestore,
    public ngFireAuth: AngularFireAuth,
    public router: Router,  
  ) {}
  // Login in with email/password
  SignIn(email, password) {
    return this.ngFireAuth.signInWithEmailAndPassword(email, password)
    .then(() => {
      this.router.navigateByUrl('sidemenu/tabs/home');
    })
  }
  // Register user with email/password
  RegisterUser(email, password) {
    return this.ngFireAuth.createUserWithEmailAndPassword(email, password);
  }
  // Sign in with Gmail
  GoogleAuth() {
    return this.AuthLogin(new firebase.auth.GoogleAuthProvider());
  }
  // Auth providers
  AuthLogin(provider) {
    return this.ngFireAuth.signInWithPopup(provider)
    .then((result) => {
        this.router.navigateByUrl('sidemenu/tabs/home');
    }).catch((error) => {
      window.alert(error)
    })
  }
  // Sign-out 
  SignOut() {
    return this.ngFireAuth.signOut().then(() => {  
      this.router.navigate(['']);
    })
  }
}