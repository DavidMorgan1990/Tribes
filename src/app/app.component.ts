import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, ToastController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AngularFireAuth } from "angularfire2/auth";
import { AuthProvider } from '../providers/auth/auth';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: string;

  pages: Array<{title: string, component: any}>;

  constructor(
    private toast: ToastController,
    public authData: AuthProvider,
    public afAuth: AngularFireAuth,
    public platform: Platform, 
    public statusBar: StatusBar, 
    public splashScreen: SplashScreen) {
    this.initializeApp();

    //Set ##
    const authObserver = afAuth.authState.subscribe( user => {
      if (user) {
        this.rootPage = 'ListViewPage';
        authObserver.unsubscribe();
      } else {
        this.rootPage = 'LoginPage';
        authObserver.unsubscribe();
      }
    });

    this.afAuth.authState.subscribe(data => {
      if(data && data.email && data.uid) {
        this.toast.create({
        message: `Welcome to Tribe, ${data.displayName}`,
        duration: 3000
      }).present();
      } else {
        this.toast.create({
        message: `Could not find authentication details.`,
        duration: 3000
      }).present();
      }
      
    });

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Profile', component: 'DetailTabsPage' },
      { title: 'Tribes', component: 'ListViewPage' },
      { title: 'Events', component: 'ListViewPage' },
      { title: 'Messages', component: 'ListViewPage' },
      { title: 'Favourites', component: 'ListViewPage' }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage($event, page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    console.log(page.title);
    this.nav.setRoot(page.component, page);
  }  

  signOut(){
    //this.afAuth.auth.signOut();
    this.authData.logoutUser();
    this.nav.setRoot('LoginPage');
  }

}
