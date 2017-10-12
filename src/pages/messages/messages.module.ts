import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MessagesPage } from './messages';

import { TabsService } from '../../services/tabs.service';


@NgModule({
  declarations: [
    MessagesPage,
  ],
  imports: [
    IonicPageModule.forChild(MessagesPage),
  ],
  providers: [
    TabsService
  ]
})
export class MessagesPageModule {}
