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
export class List {

  url = "http://localhost:3000/tamanho";
  url2 = "http://localhost:3000/sabor/";
  url3 = "http://localhost:3000/cidades/";
  url4 = "http://localhost:3000/bairros/";

  constructor(public http: HttpProvider) {
    console.log('Hello LogandoProvider Provider');
  }
  public pegando(){
    this.http.url = this.url;
    return this.http.get();
  }
  public pegando2(tamanhos: string){
    console.log(tamanhos);
    this.http.url = this.url2+tamanhos;
    return this.http.get();
  }
  public pegando3(){
    this.http.url = this.url3;
    return this.http.get();
  }
  public pegando4(tamanhos){
    this.http.url = this.url4+tamanhos;
    return this.http.get();
  }
  
}
