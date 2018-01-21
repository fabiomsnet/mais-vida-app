import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import { MedicosProvider } from '../../providers/index';

export interface IMedico {
  picture: string;
  firstName: string;
  lastName: string;
  specialty: string;
  email: string;
  city: string;
  state: string;
  active: boolean;
  busy: boolean;
}

@IonicPage({
  name: 'home',
})
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  medicos: IMedico[] = [
    {
      picture: 'http://placehold.it/32x32',
      firstName: 'Sears Horne',
      lastName: 'Osborn',
      specialty: 'male',
      city: 'Brule',
      state: 'North Carolina',
      email: 'searsosborn@zentia.com',
      active: false,
      busy: false,
    },
    {
      picture: 'http://placehold.it/32x32',
      firstName: 'Christine Moran',
      lastName: 'Horton',
      specialty: 'female',
      city: 'Robbins',
      state: 'New York',
      email: 'christinehorton@zentia.com',
      active: false,
      busy: true,
    },
    {
      picture: 'http://placehold.it/32x32',
      firstName: 'Diana Trujillo',
      lastName: 'Tillman',
      specialty: 'female',
      city: 'Accoville',
      state: 'Ohio',
      email: 'dianatillman@zentia.com',
      active: true,
      busy: true,
    },
    {
      picture: 'http://placehold.it/32x32',
      firstName: 'Woodard Benjamin',
      lastName: 'Bean',
      specialty: 'male',
      city: 'Kenvil',
      state: 'West Virginia',
      email: 'woodardbean@zentia.com',
      active: true,
      busy: false,
    },
    {
      picture: 'http://placehold.it/32x32',
      firstName: 'Antonia Cline',
      lastName: 'Daniel',
      specialty: 'female',
      city: 'Salunga',
      state: 'District Of Columbia',
      email: 'antoniadaniel@zentia.com',
      active: false,
      busy: true,
    },
    {
      picture: 'http://placehold.it/32x32',
      firstName: 'Josefa King',
      lastName: 'Erickson',
      specialty: 'female',
      city: 'Bonanza',
      state: 'Idaho',
      email: 'josefaerickson@zentia.com',
      active: false,
      busy: false,
    },
    {
      picture: 'http://placehold.it/32x32',
      firstName: 'Bobbie Spears',
      lastName: 'Berry',
      specialty: 'female',
      city: 'Waterford',
      state: 'Maine',
      email: 'bobbieberry@zentia.com',
      active: false,
      busy: true,
    },
  ];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private medicosProvider: MedicosProvider
  ) {
    this.medicosProvider.get().then(res => console.log('res medco: ', res))
  }

  addMedico() {
    this.navCtrl.push('add-medico');
  }

  details(medico: IMedico) {
    console.log(medico)
    this.navCtrl.push('detail-medico', { medico });
  }
}
