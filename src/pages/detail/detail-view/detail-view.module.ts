import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetailViewPage } from './detail-view';

@NgModule({
  declarations: [
    DetailViewPage,
  ],
  imports: [
    IonicPageModule.forChild(DetailViewPage),
  ],
})
export class DetailViewPageModule {}
