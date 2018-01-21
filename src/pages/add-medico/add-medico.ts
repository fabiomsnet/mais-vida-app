import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validator,
  Validators,
} from '@angular/forms';

@IonicPage({
  name: 'add-medico'
})
@Component({
  selector: 'page-add-medico',
  templateUrl: 'add-medico.html',
})
export class AddMedicoPage {
  cadastro: FormGroup;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private fb: FormBuilder
  ) {
      this.cadastro = this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        firstName: ['', [Validators.required]],
        lastName: ['', [Validators.required]],
        specialty: ['', [Validators.required]],
        city: ['', [Validators.required]],
        state: ['', [Validators.required]],
        active: ['', [Validators.required]],
        busy: ['', [Validators.required]],
      });
  }

  save(medico) {
    console.log('medio salvar', medico);
  }

}
