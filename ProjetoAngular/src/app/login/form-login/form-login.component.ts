import { Component, OnInit } from '@angular/core';
import { login } from '../../model/login';
import { WebListServiceService } from 'src/app/service/web-list-service.service';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent implements OnInit {

  public login: login = new login;
  private _msgEnviar: string = null;
  private _msgEnviarE: string = null;

  constructor(private srv: WebListServiceService) { }

  ngOnInit() {
  }

  autenticacao() {
    this._msgEnviar = null;
    this._msgEnviarE = null;
    this.srv.login(this.login).subscribe(res => {
      this._msgEnviar = "Usuário logado com SUCESSO!!";
      this.login.email = "";
      this.login.senha = "";
    },
      error => {
        this._msgEnviarE = "Usuário não encontrado";
        this.login.email = "";
        this.login.senha = "";
      })
    }

  limpaEnviar(){
    this._msgEnviar = null;
    this._msgEnviarE = null;
  }
}
