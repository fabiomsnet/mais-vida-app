import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Storage} from '@ionic/storage';

export interface Login {
  email: string;
  password: string;
}

@Injectable()
export class UserProvider {
  KEY_LOGIN_USER: 'USER_AUTH';

  constructor(private http: HttpClient, private storage: Storage) {
    console.log('Hello UserProvider Provider');
  }

  login(data: Login): Promise<boolean> {
    return new Promise((resolve, reject) => {
      if (data.email === 'fabiomsnet@gmail.com' && data.password === '12345') {
        localStorage.setItem(this.KEY_LOGIN_USER, JSON.stringify(data));
        resolve(true);
      } else {
        reject(false);
      }
    });
  }

  isUserLogged(): boolean {
    return localStorage.getItem(this.KEY_LOGIN_USER) ? true : false; 
  }

  logOut(): any {
    return localStorage.remove(this.KEY_LOGIN_USER);
  }
}
