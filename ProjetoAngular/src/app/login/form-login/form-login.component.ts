import { Component, OnInit } from '@angular/core';
import { usuario } from '../../model/usuario';
import { WebListServiceService } from 'src/app/service/web-list-service.service';
import {Router} from '@angular/router';
import {Globals} from '../../model/login';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css'],
  providers: [Globals]
})
export class FormLoginComponent implements OnInit {

  public usuario: usuario = new usuario;
  private _msgEnviar: string = null;
  private _msgEnviarE: string = null;

  constructor(private srv: WebListServiceService, private router:Router) { }

  ngOnInit() {
  }

  autenticacao() {
    this._msgEnviar = null;
    this._msgEnviarE = null;
    if(this.usuario.email == "" || this.usuario.senha == "" || this.usuario.email == null || this.usuario.senha == null){
      this._msgEnviarE = "Preencha todos os campos";
    }
    else{
    this.srv.login(this.usuario).subscribe(res => {
      // this._msgEnviar = "Usuário logado com sucesso!!";
      // this.usuario.email = "";
      // this.usuario.senha = "";
      this.router.navigate(['home']);


    },
      error => {
        this._msgEnviarE = "Email e/ou senha inválido(s)";
        this.usuario.email = "";
        this.usuario.senha = "";
        this.router.navigate(['login']);
      })
    }
    }

  limpaEnviar(){
    this._msgEnviar = null;
    this._msgEnviarE = null;
  }
}
