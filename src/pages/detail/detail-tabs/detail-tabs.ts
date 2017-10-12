import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-detail-tabs',
  templateUrl: 'detail-tabs.html',
})
export class DetailTabsPage {

  feedTab: string = 'DetailFeedPage';
  detailTab: string = 'DetailViewPage';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailTabsPage');
  }

}
