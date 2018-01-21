import {Component} from '@angular/core';
import {
  IonicPage,
  NavController,
  NavParams,
  ToastController,
} from 'ionic-angular';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validator,
  Validators,
} from '@angular/forms';
import {UserProvider} from '../../providers/index';

@IonicPage({
  name: 'login',
})
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  loginForm: FormGroup;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private fb: FormBuilder,
    private user: UserProvider,
    private toastCtrl: ToastController
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]],
    });
  }

  login(data) {
    this.user.login(data).then(data => {
        this.navCtrl.setRoot('home');
        this.showToast('Login efetuado com sucesso!');
  
    }).catch(err => {
        this.navCtrl.setRoot('login');
        this.showToast('Email ou senha não verificados');
    });
  }

  showToast(msg: string) {
    this.toastCtrl
      .create({
        message: msg,
        position: 'top',
        duration: 3000,
      })
      .present();
  }
}
