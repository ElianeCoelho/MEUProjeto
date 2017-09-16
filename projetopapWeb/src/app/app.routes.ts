import {Routes} from '@angular/router';

import {HomeComponent} from './home/home.component';
//import {AboutComponent} from './about/about.component';
import {FornecedoresComponent} from './fornecedores/fornecedores.component';
import {CadastroComponent} from './fornecedores/cadastro/cadastro.component';
import {ContatoComponent} from './contato/contato.component';
import {LoginComponent} from './login/login.component';
export const ROUTES: Routes = [
  {path: '', component: HomeComponent}, // componente principal
  //{path: 'about', component: AboutComponent},
  {path: 'fornecedores', component: FornecedoresComponent},
  {path: 'cadastro', component: CadastroComponent},
  {path: 'contato', component: ContatoComponent},
  {path: 'login', component: LoginComponent}
  
];
