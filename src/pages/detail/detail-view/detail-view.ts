import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-detail-view',
  templateUrl: 'detail-view.html',
})
export class DetailViewPage {

  item: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.item = this.navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailViewPage');
  }

  goToMessages() {    
    this.navCtrl.push('MessagesPage');
  }  

}
