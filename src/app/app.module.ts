import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
// import { SplashScreen } from '@ionic-native/splash-screen';
// import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';
import { Providers, ProvidersNative } from '../providers';
import { MedicosProvider } from '../providers/medicos/medicos';

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    Providers,
    ProvidersNative,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MedicosProvider,
  ]
})
export class AppModule {}
