import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

//Modules
import { HttpClientModule } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage'

//Pages
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { CoachAddPage } from '../pages/coach-add/coach-add';
import { CoachDetailsPage } from '../pages/coach-details/coach-details';
import { CoachDataProvider } from '../providers/coach-data/coach-data';
import { HttpProvider } from '../providers/http/http';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    CoachAddPage,
    CoachDetailsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    CoachAddPage,
    CoachDetailsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CoachDataProvider,
    HttpProvider
  ]
})
export class AppModule {}
