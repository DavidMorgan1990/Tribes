import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SignupPage } from './signup';

// import { UserProvider } from '../../providers/user/user';

@NgModule({
  declarations: [
    SignupPage,
  ],
  imports: [
    IonicPageModule.forChild(SignupPage),
  ],
  // providers: [
  //    UserProvider
  // ]
})
export class SignupPageModule {}
