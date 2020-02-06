import { Component, OnInit } from '@angular/core';
import { Doacao } from '../model/Doacao';
import { WebListServiceService } from '../service/web-list-service.service';
import { ONG } from '../model/ONG';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-doacao',
  templateUrl: './doacao.component.html',
  styleUrls: ['./doacao.component.css']
})
export class DoacaoComponent implements OnInit {
  ong: ONG[];
  doacao: Doacao = new Doacao();
  num: any = /^[0-9]+$/;

  _msgErroP: string = null;
  _msgErroU: string = null;
  _msgEnviar: string = null;
  _msgErroO: string = null;
  _msgErro: string = null;



  constructor(private srv: WebListServiceService, private router: Router) { }

  ngOnInit() {
    if (!localStorage.getItem("TOKEN")) {
      alert("Você não pode acessar está página sem estar logado")
      this.router.navigate(['/login']);
    }
  }
  validacao() {
    if (this.doacao.usuario.idUsuario == null || this.doacao.produto.idProduto == null || this.doacao.ong.idONG == null) {
      alert('Preencha todos os campos');
    }
    if (!this.num.test(this.doacao.usuario.idUsuario)) {
      this.doacao.usuario.idUsuario = null;
      this._msgErroU = "Id inválido";
    }
    else {
      this._msgErroU = null;
    }
    if (!this.num.test(this.doacao.produto.idProduto)) {
      this.doacao.produto.idProduto = null;
      this._msgErroP = "Id inválido";
    }
    else {
      this._msgErroP = null;
    }
    if (!this.num.test(this.doacao.ong.idONG)) {
      this.doacao.ong.idONG = null;
      this._msgErroO = "Id inválido";
    }
    else {
      this._msgErroO = null;
    }


    if (this.doacao.usuario.idUsuario != null && this.doacao.produto.idProduto != null && this.doacao.ong.idONG != null) {
      this._msgEnviar = null;
      this._msgErro = null;
      this.srv.doar(this.doacao).subscribe((res) => {
        this._msgEnviar = "Doação feita com SUCESSO!!";
        this.doacao.usuario.idUsuario = null;
        this.doacao.produto.idProduto = null;
        this.doacao.ong.idONG = null;
      },
        (error) => {
          this._msgErro = "Erro ao enviar dados!!";
          this.doacao.usuario.idUsuario = null;
          this.doacao.produto.idProduto = null;
          this.doacao.ong.idONG = null;
        })
    }
  }
  limpaEnviar() {
    this._msgEnviar = null;
    this._msgErro = null;
  }

}
