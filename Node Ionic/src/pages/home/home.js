var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Login } from './../../providers/login';
import { List } from './../../providers/list';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Messages } from '../../providers/messages';
import { Toast } from '../../providers/toast';
import { DashbordPage } from '../dashbord/dashbord';
import { CadastroUsuarioPage } from '../cadastro-usuario/cadastro-usuario';
var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, messages, toast, login, list) {
        this.navCtrl = navCtrl;
        this.messages = messages;
        this.toast = toast;
        this.login = login;
        this.list = list;
        this.tamanhos = [];
        this.sabores = [];
        //this.consultForm();
    }
    HomePage.prototype.showMessage = function () {
        this.messages.loadingShow();
    };
    HomePage.prototype.showToast = function () {
        this.toast.toastShow("Processando");
    };
    HomePage.prototype.logform = function () {
        var _this = this;
        this.login.logando(this.userName, this.password).subscribe(function (data) {
            console.log(data);
            _this.navCtrl.setRoot(DashbordPage);
        }, function (error) {
            console.log(error);
        });
        //this.navCtrl.setRoot(PaginaNovaPage);
        //if(this.username === "user" && this.password === "12345" ){
        //  this.navCtrl.setRoot(PaginaNovaPage);
        //}else{
        //  this.toast.toastShow("Conta Inválida");
        //}
    };
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
    HomePage.prototype.saboresForm = function (item) {
        var _this = this;
        console.log('Item', item);
        this.list.pegando2(item.id).subscribe(function (data3) {
            console.log('Retorno', data3);
            _this.sabores = data3;
            console.log(_this.sabores);
        }, function (error) {
            console.log("Deu muito errado");
        });
    };
    HomePage.prototype.novoUsuario = function () {
        this.navCtrl.setRoot(CadastroUsuarioPage);
    };
    HomePage = __decorate([
        Component({
            selector: 'page-home',
            templateUrl: 'home.html'
        }),
        __metadata("design:paramtypes", [NavController, Messages, Toast, Login, List])
    ], HomePage);
    return HomePage;
}());
export { HomePage };
//# sourceMappingURL=home.js.map