import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class MedicosProvider {

  constructor(public http: HttpClient) {
    console.log('Hello MedicosProvider Provider');
  }

}
