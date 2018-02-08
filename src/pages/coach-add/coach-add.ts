import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

//Modules
import { Storage } from '@ionic/storage';

//Pages
import { HttpProvider } from '../../providers/http/http'
import { CoachDataProvider } from '../../providers/coach-data/coach-data';

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

  coach={
    name:"",
    description:"",
    picURL:""
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage:Storage, public coachProv: CoachDataProvider, public httpProv: HttpProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CoachAddPage');
  }

  saveCoach(){
    this.coachProv.getToken().then((data)=>{
      this.httpProv.saveCoach(data, this.coach).then((result)=>{
        console.log(result)
        this.navCtrl.pop()
      })
    }).catch((err)=>{
      console.log(err)
      this.navCtrl.setRoot(CoachAddPage)
    })
  }
  
}
