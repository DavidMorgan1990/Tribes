import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { TabsService } from '../../services/tabs.service';


@IonicPage()
@Component({
  selector: 'page-messages',
  templateUrl: 'messages.html',
})
export class MessagesPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private tabsService: TabsService
    ) {  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MessagesPage');
    this.tabsService.hide();
  }

}
