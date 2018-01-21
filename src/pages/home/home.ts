import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserProvider } from './../../providers';

@IonicPage({
  name: 'home'
})
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private user: UserProvider
  ) {}

}
