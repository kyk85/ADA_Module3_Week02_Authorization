import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

//Pages
import { HomePage } from '../home/home'
import { HttpProvider } from '../../providers/http/http'

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public httpProv: HttpProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  authLogin(user){
    this.httpProv.login(this.user.name, this.user.password)
    .then((data)=>{
      console.log(data)
    }
    
  )
  this.navCtrl.push(HomePage)
    

  }

}
