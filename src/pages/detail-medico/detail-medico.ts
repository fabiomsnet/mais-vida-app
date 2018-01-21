import { IMedico } from '../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MedicosProvider } from '../../providers/medicos';

@IonicPage({
  name: 'detail-medico'
})
@Component({
  selector: 'page-detail-medico',
  templateUrl: 'detail-medico.html',
})
export class DetailMedicoPage {
  medico: IMedico[] = [];
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private medicoProvider: MedicosProvider
  ) {
      this.medico = this.navParams.get('medico');
  }

  edit() {
    this.medicoProvider.edit(this.medico);
  }

}
