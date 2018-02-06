import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the CoachDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-coach-details',
  templateUrl: 'coach-details.html',
})
export class CoachDetailsPage {

  coach=[{
    name:"",
    description:"",
    picURL:""
  }]

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    this.coach=this.navParams.get('coach')
    console.log('ionViewDidLoad CoachDetailsPage');
  }

  closeDetails(){
    this.viewCtrl.dismiss();
  }

}
