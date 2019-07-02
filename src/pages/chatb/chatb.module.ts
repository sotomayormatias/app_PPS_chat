import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChatbPage } from './chatb';

@NgModule({
  declarations: [
    ChatbPage,
  ],
  imports: [
    IonicPageModule.forChild(ChatbPage),
  ],
})
export class ChatbPageModule {}
