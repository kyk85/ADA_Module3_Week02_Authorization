import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

//Modules
import { ModalController } from 'ionic-angular';

//Pages
import { LoginPage } from '../login/login'
import { CoachAddPage } from "../coach-add/coach-add";
import { CoachDetailsPage } from "../coach-details/coach-details";
import { HttpProvider } from '../../providers/http/http';
import { CoachDataProvider } from "../../providers/coach-data/coach-data";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  coaches

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public httpProv: HttpProvider, public coachProv: CoachDataProvider) {
 
  }

  ionViewDidLoad(){
    this.coachProv.getToken().then((data)=>{
      console.log(data)
      this.httpProv.getCoaches(data).then((result)=>{
        this.coaches=result
      })
    }).catch((err)=>{
      this.navCtrl.setRoot(LoginPage)
    })
  }

  newCoach(coach){
    this.navCtrl.push(CoachAddPage);
  }

  coachDetails(coach) {
    let modal = this.modalCtrl.create(CoachDetailsPage, {coach:coach});
    modal.present();
  }
}
