import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { List } from '../../providers/list';
import { NovoProvider } from '../../providers/novo';
import { Toast } from '../../providers/toast';

/**
 * Generated class for the SaboresPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sabores',
  templateUrl: 'sabores.html',
})
export class SaboresPage {
  public tamanhos = [];
  Name : string;
  preco : number;
  tamanhoSelecionado : string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private list: List, private novo: NovoProvider, private toast : Toast) {
    this.consultForm();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SaboresPage');
  }
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
  }
  public adicionaSabor(){
    this.novo.cadastroSabores(this.tamanhoSelecionado, this.Name, this.preco).subscribe(
      (data5 : any) => {
        //console.log(data5);
        this.toast.presentToast("Cadastro realizado com sucesso!", 7000);
        //this.navCtrl.setRoot(DashbordPage);
      },
      (error : any) =>{
        console.log(error)
        this.toast.presentToast("Usuario e senha inválidos!", 7000);
        console.log("Que triste deu muito errado!");
      }
  );
}

}
