import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

//Modules
import { Storage } from '@ionic/storage'

//Pages
import { HomePage } from '../home/home'
import { HttpProvider } from '../../providers/http/http'
import { CoachDataProvider } from '../../providers/coach-data/coach-data'

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user = {
    name:"",
    password:""
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, public httpProv: HttpProvider, public coachProv: CoachDataProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
    
  }
  
  authLogin(user){
    this.httpProv.login(this.user.name, this.user.password)
    .then((data)=>{
      this.coachProv.saveToken(data);
      this.navCtrl.setRoot(HomePage);
      console.log(data);
    }).catch((err)=>{
      this.navCtrl.setRoot(LoginPage)
    })
  }
}
  