import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

//Modules
import { ModalController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

//Pages
import { CoachAddPage } from "../coach-add/coach-add";
import { CoachDetailsPage } from "../coach-details/coach-details";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  coaches=[]

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public storage: Storage) {
    storage.get('coaches').then((val) => {
      if (val) {
        this.coaches=val
      } else {
        this.coaches=[{
          name:"Coach1",
          description:"Description1",
          picURL:"https://vignette.wikia.nocookie.net/southpark/images/3/38/JeromeChef.png/revision/latest?cb=20160402120214"
        }]
      }
      
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
