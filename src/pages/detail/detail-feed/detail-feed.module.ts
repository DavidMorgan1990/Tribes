import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetailFeedPage } from './detail-feed';

@NgModule({
  declarations: [
    DetailFeedPage,
  ],
  imports: [
    IonicPageModule.forChild(DetailFeedPage),
  ],
})
export class DetailFeedPageModule {}
