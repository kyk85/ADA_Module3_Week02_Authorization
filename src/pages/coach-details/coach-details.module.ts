import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CoachDetailsPage } from './coach-details';

@NgModule({
  declarations: [
    CoachDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(CoachDetailsPage),
  ],
})
export class CoachDetailsPageModule {}
