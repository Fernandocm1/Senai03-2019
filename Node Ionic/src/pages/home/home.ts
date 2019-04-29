import { Login } from './../../providers/login';
import { List } from './../../providers/list';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Messages } from '../../providers/messages';
import { Toast } from '../../providers/toast';
import { DashbordPage } from '../dashbord/dashbord';
import { CadastroUsuarioPage } from '../cadastro-usuario/cadastro-usuario';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  //public listAlunos = [];
  //public esconderAlunos = [];
  //public limparAlunos = [];
  //public exibirConteudo : boolean = true;
  userName : string;
  password : string;
  public tamanhos = [];
  public sabores = [];

  constructor(public navCtrl: NavController, private messages: Messages, private toast: Toast, private login: Login, private list: List) {
    //this.consultForm();
  }
  public showMessage(){
    this.messages.loadingShow();
  }
  public showToast(){
    this.toast.toastShow("Processando");
  }
  public logform() {
    this.login.logando(this.userName, this.password).subscribe(
      (data : any) => {
        console.log(data);
        this.navCtrl.setRoot(DashbordPage);
      },
      (error : any) =>{
        console.log(error);
      }
    );
    //this.navCtrl.setRoot(PaginaNovaPage);

  //if(this.username === "user" && this.password === "12345" ){
  //  this.navCtrl.setRoot(PaginaNovaPage);
  //}else{
  //  this.toast.toastShow("Conta Inválida");
  //}

  }
  //public logform2() {
  //  this.navCtrl.setRoot(PaginaNovaPage);

  //}
  /*
  public consultForm() {
    this.list.pegando().subscribe(
      (data2 : any) => {
        this.tamanhos=data2;
        console.log(this.tamanhos);
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
  */

  public saboresForm(item) {
    console.log('Item', item);
    this.list.pegando2(item.id).subscribe(
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
  public novoUsuario(){
    this.navCtrl.setRoot(CadastroUsuarioPage);
  }
  
}
