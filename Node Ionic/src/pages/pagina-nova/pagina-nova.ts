import { Component } from '@angular/core';
import { List } from './../../providers/list';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PaginaNovaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pagina-nova',
  templateUrl: 'pagina-nova.html',
})
export class PaginaNovaPage {

  username : string;
  password : string;
  public cidades = [];
  public idCidade : any;
  public idBairros : any;
  public bairros = [];
  //public bairros : boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, private list: List) {
    this.consultForm();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaginaNovaPage');
  }

  public consultForm() {
    this.list.pegando3().subscribe(
      (data2 : any) => {
        this.cidades= data2;
        console.log(this.cidades);
      },
      (error : any) =>{
        console.log("Deu errado");
      }
    );
  }
  public bairrosForm() {
      console.log('Passei aqui!!');
      console.log('Item', this.idCidade);
      this.list.pegando4(this.idCidade).subscribe(
        (data3 : any) => {
          console.log('Retorno', data3);
          this.bairros=data3;
          console.log(this.bairros);
        },
        (error : any) =>{
          console.log("Deu muito errado");
        }
      );
    }
  public Textos(){
  //this.bairros=true;
  console.log(this.bairros);

  }
  public limpar(){
    this.bairros = [];
  }

}
