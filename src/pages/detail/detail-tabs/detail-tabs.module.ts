import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetailTabsPage } from './detail-tabs';

@NgModule({
  declarations: [
    DetailTabsPage,
  ],
  imports: [
    IonicPageModule.forChild(DetailTabsPage),
  ],
})
export class DetailTabsPageModule {}
