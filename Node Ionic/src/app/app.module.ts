import { List } from './../providers/list';
import { PaginaNovaPage } from './../pages/pagina-nova/pagina-nova';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule} from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Messages } from '../providers/messages';
import { Toast } from '../providers/toast';
import { LogandoProvider } from '../providers/logando/logando';
import { Login } from '../providers/login'
import { HttpProvider } from '../providers/http';
import { NavController } from "ionic-angular";
import { DashbordPage } from '../pages/dashbord/dashbord';
import { CadastroUsuarioPage } from '../pages/cadastro-usuario/cadastro-usuario';
import { NovoProvider } from '../providers/novo';


@NgModule({
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
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LogandoProvider,
    Login,
    List,
    HttpProvider,
    NovoProvider
  ]
})
export class AppModule {}
