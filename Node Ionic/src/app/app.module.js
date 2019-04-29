var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { List } from './../providers/list';
import { PaginaNovaPage } from './../pages/pagina-nova/pagina-nova';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Messages } from '../providers/messages';
import { Toast } from '../providers/toast';
import { LogandoProvider } from '../providers/logando/logando';
import { Login } from '../providers/login';
import { HttpProvider } from '../providers/http';
import { DashbordPage } from '../pages/dashbord/dashbord';
import { CadastroUsuarioPage } from '../pages/cadastro-usuario/cadastro-usuario';
import { NovoProvider } from '../providers/novo';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
            declarations: [
                MyApp,
                HomePage,
                ListPage,
                PaginaNovaPage,
                CadastroUsuarioPage,
                DashbordPage
            ],
            imports: [
                BrowserModule,
                HttpModule,
                IonicModule.forRoot(MyApp),
            ],
            bootstrap: [IonicApp],
            entryComponents: [
                MyApp,
                HomePage,
                ListPage,
                PaginaNovaPage,
                CadastroUsuarioPage,
                DashbordPage
            ],
            providers: [
                StatusBar,
                SplashScreen,
                Messages,
                Toast,
                { provide: ErrorHandler, useClass: IonicErrorHandler },
                LogandoProvider,
                Login,
                List,
                HttpProvider,
                NovoProvider
            ]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map