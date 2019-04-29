import { HttpProvider } from './http';
import { Injectable } from '@angular/core';
import { processRecords } from 'ionic-angular/components/virtual-scroll/virtual-util';
import { NavController } from "ionic-angular";

/*
  Generated class for the LogandoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class Login {

  url = "http://localhost:3000/logando";

  constructor(public http: HttpProvider) {
    console.log('Hello LogandoProvider Provider');
  }
  public logando(userName : string, password : string){
    //console.log("Passei Aqui mesmo daora");
    let obj = {
      userName : userName,
      password : password
    }
    this.http.url = this.url;
    return this.http.post(obj);
  }
}
