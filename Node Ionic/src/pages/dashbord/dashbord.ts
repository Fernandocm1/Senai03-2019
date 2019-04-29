import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PaginaNovaPage } from '../pagina-nova/pagina-nova';
import { Messages } from '../../providers/messages';
import { Toast } from '../../providers/toast';
import { Login } from '../../providers/login';
import { List } from '../../providers/list';

/**
 * Generated class for the DashbordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dashbord',
  templateUrl: 'dashbord.html',
})
export class DashbordPage {
  username : string;
  password : string;
  public tamanhos = [];
  tamanhoSelecionado : string;
  public sabores = [];

  constructor(public navCtrl: NavController, private messages: Messages, private toast: Toast, private login: Login, private list: List) {
    this.consultForm();
  }

  public showMessage(){
    this.messages.loadingShow();
  }
  public showToast(){
    this.toast.toastShow("Processando");
  }
  public logform2() {
    this.navCtrl.setRoot(PaginaNovaPage);

  }
  public consultForm() {
    this.list.pegando().subscribe(
      (data2 : any) => {
        this.tamanhos=data2;
        //console.log(this.tamanhos);
      },
      (error : any) =>{
        console.log("Deu errado");
      }
    );

  //if(this.username === "user" && this.password === "12345" ){
  //  this.navCtrl.setRoot(PaginaNovaPage);
  //}else{
  //  this.toast.toastShow("Conta Inválida");
  //}
  }

  public saboresForm() {
    console.log(this.tamanhoSelecionado);
    this.list.pegando2(this.tamanhoSelecionado).subscribe(
      (data3 : any) => {
        console.log('Retorno', data3);
        this.sabores=data3;
        console.log(this.sabores);
      },
      (error : any) =>{
        console.log("Deu muito errado");
      }
    );
  }


}
