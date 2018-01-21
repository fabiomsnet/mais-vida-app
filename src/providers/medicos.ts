import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IMedico } from '../pages/home/home';

@Injectable()
export class MedicosProvider {

  constructor(public http: HttpClient) {
    console.log('Hello MedicosProvider Provider');
  }

 add(medico: IMedico) {

 }

 edit(id: any) {
  console.log(id);
 }

 del(id: any) {

 }

}
