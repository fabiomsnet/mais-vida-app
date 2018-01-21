import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IMedico } from '../pages/home/home';
import { Headers, Http, RequestOptions } from '@angular/http';

@Injectable()
export class MedicosProvider {
  URL: '192.168.0.2:8080/api/medicos';
  public headers: any = {
    'Authorization': 'Basic YWRtaW46YWRtaW4='
  };
  constructor(
    public http: HttpClient
  ) {
    console.log('Hello MedicosProvider Provider');
  }

 add(medico: IMedico) {

 }

 edit(id: any) {
  console.log(id);
 }

 del(id: any) {

 }

 get() {
  let headers = new Headers({ 'Content-Type':'*/*' });
  headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=' );
  return this.http.get(this.URL, { headers: headers } )
    .toPromise()
    .then(res => {
      console.log('res', res);
    })
 }

}
