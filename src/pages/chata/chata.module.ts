import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChataPage } from './chata';

@NgModule({
  declarations: [
    ChataPage,
  ],
  imports: [
    IonicPageModule.forChild(ChataPage),
  ],
})
export class ChataPageModule {}
