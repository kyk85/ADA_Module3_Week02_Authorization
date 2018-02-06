import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

//Modules
import { Storage } from '@ionic/storage';

//Pages
//import { HomePage } from '../home/home';

/**
 * Generated class for the CoachAddPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-coach-add',
  templateUrl: 'coach-add.html',
})
export class CoachAddPage {

  coach=[{
    name:"",
    description:"",
    picURL:""
  }]

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage:Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CoachAddPage');
  }

  saveCoach(coach){
    this.navCtrl.pop()
    
  }

}
