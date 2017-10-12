import { Component } from '@angular/core';
import { 
  IonicPage, 
  NavController, 
  LoadingController, 
  Loading, 
  AlertController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthProvider } from '../../providers/auth/auth';
import { EmailValidator } from '../../validators/email';
import { UserProvider } from '../../providers/user/user';
import { FirebaseObjectObservable } from 'angularfire2/database';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  public loginForm:FormGroup;
  public loading:Loading;
  user$: FirebaseObjectObservable<any>;
  isUser: any;

  constructor(public navCtrl: NavController, public authData: AuthProvider, 
    public formBuilder: FormBuilder, public alertCtrl: AlertController,
    public loadingCtrl: LoadingController, public userProvider: UserProvider) {

      this.user$ = this.userProvider.user$;

      this.loginForm = formBuilder.group({
        email: ['', Validators.compose([Validators.required, EmailValidator.isValid])],
        password: ['', Validators.compose([Validators.minLength(6), Validators.required])]
      });
  }

  loginUser(){
    if (!this.loginForm.valid){
      console.log(this.loginForm.value);
    } else {
      this.authData.loginUser(this.loginForm.value.email, this.loginForm.value.password)
      .then( authData => {
        this.navCtrl.setRoot('ListViewPage');
      }, error => {
        this.loading.dismiss().then( () => {
          let alert = this.alertCtrl.create({
            message: error.message,
            buttons: [
              {
                text: "Ok",
                role: 'cancel'
              }
            ]
          });
          alert.present();
        });
      });

      this.loading = this.loadingCtrl.create({
        dismissOnPageChange: true,
      });
      this.loading.present();
    }
  }

  goToResetPassword(){
    this.navCtrl.push('ResetPasswordPage');
  }

  createAccount(){
    this.navCtrl.push('SignupPage');
  }

  fblogin(){    
    this.authData.fbLogin()
     .then( authData => {
       this.userProvider.getUser(authData.user).subscribe(data => {
          if (data.$value === null) {
            var userData = {              
              name: authData.user.displayName,
              email: authData.user.email,
              photoUrl: authData.user.photoURL
            }
            console.log('user', userData);
            this.userProvider.saveUser(userData);
          } 
       });   
       this.navCtrl.setRoot('ListViewPage');
     }, error => {
       this.loading.dismiss().then( () => {
         let alert = this.alertCtrl.create({
           message: error.message,
           buttons: [
             {
               text: "Ok",
               role: 'cancel'
             }
           ]
         });
         alert.present();
       });
     });
     this.loading = this.loadingCtrl.create({
       dismissOnPageChange: true,
     });
     this.loading.present();
  }


  googlelogin(){    
    this.authData.googleLogin()
    .then( authData => {
      this.userProvider.getUser(authData.user).subscribe(data => {
        if (data.$value === null) {
          var userData = {              
            name: authData.user.displayName,
            email: authData.user.email,
            photoUrl: authData.user.photoURL
          }
          console.log('user', userData);
          this.userProvider.saveUser(userData);
        } 
     });
      this.navCtrl.setRoot('ListViewPage');
    }, error => {
      this.loading.dismiss().then( () => {
        let alert = this.alertCtrl.create({
          message: error.message,
          buttons: [
            {
              text: "Ok",
              role: 'cancel'
            }
          ]
        });
        alert.present();
      });
    });
    this.loading = this.loadingCtrl.create({
      dismissOnPageChange: true,
    });
    this.loading.present();
  }  

}