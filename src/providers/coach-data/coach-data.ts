import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the CoachDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CoachDataProvider {

  coaches=[{
    name:"Coach1",
    description:"Description1",
    picURL:"https://vignette.wikia.nocookie.net/southpark/images/3/38/JeromeChef.png/revision/latest?cb=20160402120214"
  },{
    name:"Coach2",
    description:"Description2",
    picURL:"https://vignette.wikia.nocookie.net/southpark/images/3/38/JeromeChef.png/revision/latest?cb=20160402120214"
  },{
    name:"Coach3",
    description:"Description3",
    picURL:"https://vignette.wikia.nocookie.net/southpark/images/3/38/JeromeChef.png/revision/latest?cb=20160402120214"
  }]

  constructor(public http: HttpClient) {
    console.log('Hello CoachDataProvider Provider');
  }

}
