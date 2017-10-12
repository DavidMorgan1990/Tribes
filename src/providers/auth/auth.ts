import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import firebase from 'firebase/app';
import { Facebook } from '@ionic-native/facebook';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthProvider {
  user$: Observable<firebase.User>;

  constructor( 
              public afAuth: AngularFireAuth, 
              public facebook:Facebook) {
              this.user$ = this.afAuth.authState;
              }  


  loginUser(newEmail: string, newPassword: string): firebase.Promise<any> {
    return this.afAuth.auth.signInWithEmailAndPassword(newEmail, newPassword);
  }

  resetPassword(email: string): firebase.Promise<any> {
    return this.afAuth.auth.sendPasswordResetEmail(email);
  }

  logoutUser(): firebase.Promise<any> {
    return this.afAuth.auth.signOut();
  }

  signupUser(newEmail: string, newPassword: string): firebase.Promise<any> {
    return this.afAuth.auth.createUserWithEmailAndPassword(newEmail, newPassword);
  }

  fbLogin(): firebase.Promise<any> {    
    return this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider());    
  }

  googleLogin(): firebase.Promise<any> {
    return this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }

  getUser() {
    return this.afAuth.authState;
  }

}