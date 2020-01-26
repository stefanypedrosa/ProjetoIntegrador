import { Component, OnInit } from '@angular/core';
import { usuario } from '../../model/usuario';
import { WebListServiceService } from 'src/app/service/web-list-service.service';
import { Router } from '@angular/router';
import { Globals } from '../../model/login';
import { Token } from 'src/app/model/token';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css'],
  providers: [Globals]
})
export class FormLoginComponent implements OnInit {

  public usuario: usuario = new usuario;
  private _msgEnviarE: string = null;
  private _msgLogout: string = null;

  constructor(private srv: WebListServiceService, private router: Router) { }

  ngOnInit() {
    if (localStorage.getItem("TOKEN")) {
      localStorage.removeItem("TOKEN");
      this._msgLogout = "Usuário desconectado!";
    }
  }

  autenticacao() {
    this._msgEnviarE = null;
    if (this.usuario.email == "" || this.usuario.senha == "" || this.usuario.email == null || this.usuario.senha == null) {
      this._msgEnviarE = "Preencha todos os campos";
    }
    else {
      //Globals.USUARIO = this.usuario;
      this.srv.login(this.usuario).subscribe((res: Token) => {
        localStorage.setItem("TOKEN", res.token);
        this.srv.log.next(true);
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

  limpaEnviar() {
    this._msgEnviarE = null;
    this._msgLogout = null;
  }


}
