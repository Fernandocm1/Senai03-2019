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
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpProvider } from '../../providers/http';
import { NovoProvider } from '../../providers/novo';
import { HomePage } from '../home/home';
/**
 * Generated class for the CadastroUsuarioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CadastroUsuarioPage = /** @class */ (function () {
    function CadastroUsuarioPage(http, novo, navCtrl, navParams) {
        this.http = http;
        this.novo = novo;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    CadastroUsuarioPage.prototype.novoUsuario = function () {
        this.novo.cadastrando(this.userName, this.password).subscribe(function (data5) {
            console.log(data5);
            console.log("Que felicidade Deu muito certo!!!");
            //this.navCtrl.setRoot(DashbordPage);
        }, function (error) {
            console.log(error);
            console.log("Que triste deu muito errado!");
        });
    };
    CadastroUsuarioPage.prototype.voltarLogin = function () {
        this.navCtrl.setRoot(HomePage);
    };
    CadastroUsuarioPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-cadastro-usuario',
            templateUrl: 'cadastro-usuario.html',
        }),
        __metadata("design:paramtypes", [HttpProvider, NovoProvider, NavController, NavParams])
    ], CadastroUsuarioPage);
    return CadastroUsuarioPage;
}());
export { CadastroUsuarioPage };
//# sourceMappingURL=cadastro-usuario.js.map