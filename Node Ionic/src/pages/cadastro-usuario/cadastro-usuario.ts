import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpProvider } from '../../providers/http';
import { NovoProvider } from '../../providers/novo';
import { HomePage } from '../home/home';
import { Toast } from '../../providers/toast';


/**
 * Generated class for the CadastroUsuarioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastro-usuario',
  templateUrl: 'cadastro-usuario.html',
})
export class CadastroUsuarioPage {

  public userName : string;
  public password : string;

  constructor(public http: HttpProvider,private novo: NovoProvider ,public navCtrl: NavController, public navParams: NavParams, private toast : Toast) {
  }

  public verificaUsuario(){
    if(this.userName !== "" && this.password !== "" && this.userName !== undefined && this.password !== undefined){
      this.novo.verifica(this.userName).subscribe(
        (data5 : any) => {
          //console.log(data5);
          //this.toast.presentToast("Cadastro realizado com sucesso!", 5000);
          this.novoUsuario()
          //this.navCtrl.setRoot(DashbordPage);
        },
        (error : any) =>{
          this.toast.presentToast("Usuário já existe!", 7000);
          console.log(error)
          console.log("Usuário já existe!");
        }
    );
  }else{
    this.toast.presentToast("Preencha os campos corretamente!", 7000);
  }
}
  public novoUsuario(){
      this.novo.cadastrando(this.userName, this.password).subscribe(
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
  public voltarLogin(){
    this.navCtrl.setRoot(HomePage);
  }
  /*public logando(userName : string, password : string){
    let obj = {
      userName : userName,
      password : password
    }
    this.http.url = this.url;
    return this.http.post(obj);
  }
*/
}
