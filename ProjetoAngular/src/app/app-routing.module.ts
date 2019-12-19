import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {SobreComponent} from './sobre/sobre.component';
//import {HomeComponent}  from './home/home.component';
import {ContatosComponent} from './contatos/contatos.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'sobre',component:SobreComponent},
  //{path:'home',component:HomeComponent},
  {path:'contatos',component:ContatosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
