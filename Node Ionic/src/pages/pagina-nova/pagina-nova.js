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
import { List } from './../../providers/list';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
/**
 * Generated class for the PaginaNovaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PaginaNovaPage = /** @class */ (function () {
    //public bairros : boolean;
    function PaginaNovaPage(navCtrl, navParams, list) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.list = list;
        this.cidades = [];
        this.bairros = [];
        this.consultForm();
    }
    PaginaNovaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PaginaNovaPage');
    };
    PaginaNovaPage.prototype.consultForm = function () {
        var _this = this;
        this.list.pegando3().subscribe(function (data2) {
            _this.cidades = data2;
            console.log(_this.cidades);
        }, function (error) {
            console.log("Deu errado");
        });
    };
    PaginaNovaPage.prototype.bairrosForm = function () {
        var _this = this;
        console.log('Passei aqui!!');
        console.log('Item', this.idCidade);
        this.list.pegando4(this.idCidade).subscribe(function (data3) {
            console.log('Retorno', data3);
            _this.bairros = data3;
            console.log(_this.bairros);
        }, function (error) {
            console.log("Deu muito errado");
        });
    };
    PaginaNovaPage.prototype.Textos = function () {
        //this.bairros=true;
        console.log(this.bairros);
    };
    PaginaNovaPage.prototype.limpar = function () {
        this.bairros = [];
    };
    PaginaNovaPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-pagina-nova',
            templateUrl: 'pagina-nova.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams, List])
    ], PaginaNovaPage);
    return PaginaNovaPage;
}());
export { PaginaNovaPage };
//# sourceMappingURL=pagina-nova.js.map