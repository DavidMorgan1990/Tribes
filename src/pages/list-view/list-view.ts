import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-list-view',
  templateUrl: 'list-view.html',
})
export class ListViewPage {
  items: Array<{id: string, title: string}>;
  page: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  
  this.page = this.navParams.data;
    console.log(this.navParams);


    this.items = [];
    for (let i = 1; i < 11; i++) {
      this.items.push({
        id: 'Item ' + i,
        title: 'This is item #' + i
      });
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListViewPage');
        
  }

  goToDetail($event, item) {
    console.log("so ido work");
    if(this.page.title == "Messages"){
      this.navCtrl.push('MessagesPage', item);
    }else{
      this.navCtrl.push('DetailTabsPage', item);
    }    
  }

}
