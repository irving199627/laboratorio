import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { firebaseConfig } from '../config/firebase.config';

// AngularFire
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { BusquedaPage } from '../pages/busqueda/busqueda';
import { InfoPage } from '../pages/info/info';

import { FormsModule } from '@angular/forms';
import { SearchProvider } from '../providers/search/search';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    BusquedaPage,
    InfoPage
  ],
  imports: [
AngularFireModule.initializeApp(firebaseConfig),
  BrowserModule,
  AngularFireDatabaseModule,
  FormsModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    BusquedaPage,
    InfoPage
  ],
  providers: [
    SearchProvider,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
  ]
})
export class AppModule {}
