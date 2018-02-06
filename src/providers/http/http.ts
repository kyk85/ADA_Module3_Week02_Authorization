import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';





/*
  Generated class for the HttpProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HttpProvider {

  constructor(public http: HttpClient) {
    console.log('Hello HttpProvider Provider');
  }

  login(username,password) {
    var user={
      email: username,
      password:password
    }
 
    return new Promise(resolve => {
      // We're using Angular HTTP provider to request the data,
      // then on the response, it'll map the JSON data to a parsed JS object.
      // Next, we process the data and resolve the promise with the new data.
      this.http.post('https://haunted-crypt-78964.herokuapp.com/login',user)
      .subscribe(data => {
          // we've got back the raw data, now generate the core schedule data
          // and save the data for later reference
          resolve(data);
        });
    });
  }
}
