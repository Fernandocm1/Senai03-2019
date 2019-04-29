var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
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
var DashbordPage = /** @class */ (function () {
    function DashbordPage(navCtrl, messages, toast, login, list) {
        this.navCtrl = navCtrl;
        this.messages = messages;
        this.toast = toast;
        this.login = login;
        this.list = list;
        this.tamanhos = [];
        this.sabores = [];
        this.consultForm();
    }
    DashbordPage.prototype.showMessage = function () {
        this.messages.loadingShow();
    };
    DashbordPage.prototype.showToast = function () {
        this.toast.toastShow("Processando");
    };
    DashbordPage.prototype.logform2 = function () {
        this.navCtrl.setRoot(PaginaNovaPage);
    };
    DashbordPage.prototype.consultForm = function () {
        var _this = this;
        this.list.pegando().subscribe(function (data2) {
            _this.tamanhos = data2;
            //console.log(this.tamanhos);
        }, function (error) {
            console.log("Deu errado");
        });
        //if(this.username === "user" && this.password === "12345" ){
        //  this.navCtrl.setRoot(PaginaNovaPage);
        //}else{
        //  this.toast.toastShow("Conta Inválida");
        //}
    };
    DashbordPage.prototype.saboresForm = function () {
        var _this = this;
        console.log(this.tamanhoSelecionado);
        this.list.pegando2(this.tamanhoSelecionado).subscribe(function (data3) {
            console.log('Retorno', data3);
            _this.sabores = data3;
            console.log(_this.sabores);
        }, function (error) {
            console.log("Deu muito errado");
        });
    };
    DashbordPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-dashbord',
            templateUrl: 'dashbord.html',
        }),
        __metadata("design:paramtypes", [NavController, Messages, Toast, Login, List])
    ], DashbordPage);
    return DashbordPage;
}());
export { DashbordPage };
//# sourceMappingURL=dashbord.js.map