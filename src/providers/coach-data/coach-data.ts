import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';

//Modules
import { Storage } from '@ionic/storage';

/*
  Generated class for the CoachDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CoachDataProvider {

  coaches=[]

  constructor(public http: HttpClient, public storage: Storage) {
    console.log('Hello CoachDataProvider Provider');
  }

  saveToken(token){
    this.storage.set('token', token)
  }

  getToken(){
    return new Promise((resolve,reject) => {
      this.storage.get('token').then((val)=>{
        resolve(val["token"])  
      }).catch((err)=>{
        reject(err);
      })
    })
  }


}
