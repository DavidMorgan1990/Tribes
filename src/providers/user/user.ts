import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseObjectObservable} from 'angularfire2/database';
import { AuthProvider } from '../../providers/auth/auth';


@Injectable()
export class UserProvider {
  user$: FirebaseObjectObservable<any>;
  item: any;

  constructor( private db: AngularFireDatabase, public authData: AuthProvider ) {
    this.authData.getUser().subscribe(user => {
      if (user) {
        this.user$ = this.db.object(`/users/${user.uid}/profile`);            
      }
    });    
  }

  saveUser(user) {
    this.user$.set(user);
  }
  
  getUser(user) {
    // const observable = 
    console.log('user', user.uid);
    return this.db.object(`/users/${user.uid}`);
      
    // ;
    // observable.subscribe(
    //   next => console.log('next', next),
    //   error =>console.log('error', error),
    //   () => console.log('completed')
    // );
  }


}
