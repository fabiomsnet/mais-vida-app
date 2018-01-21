import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage({
  name: 'add-medico'
})
@Component({
  selector: 'page-add-medico',
  templateUrl: 'add-medico.html',
})
export class AddMedicoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddMedicoPage');
  }

}
