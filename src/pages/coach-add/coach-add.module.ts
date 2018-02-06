import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CoachAddPage } from './coach-add';

@NgModule({
  declarations: [
    CoachAddPage,
  ],
  imports: [
    IonicPageModule.forChild(CoachAddPage),
  ],
})
export class CoachAddPageModule {}
