import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { UserProvider } from './../providers';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:string = 'login';

  constructor(
    platform: Platform, 
    statusBar: StatusBar, 
    splashScreen: SplashScreen,
    private user: UserProvider
  ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      this.chooseHomeOrLogin();
    });
  }

  chooseHomeOrLogin() {
    if(!this.user.isUserLogged()) {
      this.rootPage = 'home';
    } else {
      this.rootPage = 'login';
    }
  }
}

