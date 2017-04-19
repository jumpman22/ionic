import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { HistoryPage } from './history-page';

@NgModule({
  declarations: [
    HistoryPage,
  ],
  imports: [
    IonicModule.forChild(HistoryPage),
  ],
  exports: [
    HistoryPage
  ]
})
export class HistoryPageModule {}
