import { Injectable } from '@angular/core';
import { HttpProvider } from './http';

/*
  Generated class for the NovoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class NovoProvider {

  url = "http://localhost:3000/novo";
  url2 = "http://localhost:3000/verifica";
  constructor(public http: HttpProvider) {
    console.log('Hello NovoProvider Provider');
  }
  public cadastrando(userName : string, password : string){
    console.log("Passei Aqui mesmo");
    //console.log(userName);
    //console.log(password);
    let obj = {
      userName : userName,
      password : password
    }
    this.http.url = this.url;
    return this.http.post(obj);
  }
  public verifica(userName : string){
    console.log("Passei Aqui mesmo");
    //console.log(userName);
    //console.log(password);
    let obj = {
      userName : userName
    }
    this.http.url = this.url2;
    return this.http.post(obj);
  }
}