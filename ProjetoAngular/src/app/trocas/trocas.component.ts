import { Component, OnInit } from '@angular/core';
import { Troca } from '../model/Troca';
import { WebListServiceService } from '../service/web-list-service.service';
import { Usuario } from '../model/Usuario';
import { Produto } from '../model/Produto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trocas',
  templateUrl: './trocas.component.html',
  styleUrls: ['./trocas.component.css']
})
export class TrocasComponent implements OnInit {
  troca: Troca = new Troca();

  num: any = /^[0-9]+$/;

  _msgErroR: string = null;
  _msgErroD: string = null;
  _msgErroC: string = null;
  _msgErroRec: string = null;
  _msgEnviar: string = null;
  _msgErro: string = null;

  constructor(private srv: WebListServiceService, private router: Router) { }

  ngOnInit() {
    if (!localStorage.getItem("TOKEN")) {
      alert("Você não pode acessar está página sem estar logado")
      this.router.navigate(['/login']);
    }
  }
  validacao() {
    if (this.troca.remetente.idUsuario == null || this.troca.destinatario.idUsuario == null || this.troca.cedido.idProduto == null || this.troca.recebido.idProduto == null) {
      alert('Preencha todos os campos');
    }
    if (!this.num.test(this.troca.remetente.idUsuario)) {
      this.troca.remetente.idUsuario = null;
      this._msgErroR = "Id inválido";
    }
    else {
      this._msgErroR = null;
    }
    if (!this.num.test(this.troca.destinatario.idUsuario)) {
      this.troca.destinatario.idUsuario = null;
      this._msgErroD = "Id inválido";
    }
    else {
      this._msgErroD = null;
    }
    if (!this.num.test(this.troca.cedido.idProduto)) {
      this.troca.cedido.idProduto = null;
      this._msgErroC = "Ops, verifique o código do seu produto";
    }
    else {
      this._msgErroC = null;
    }
    if (!this.num.test(this.troca.recebido.idProduto)) {
      this.troca.recebido.idProduto = null;
      this._msgErroRec = "Ops, verifique o código do produto a ser trocado";
    }
    else {
      this._msgErroRec = null;
    }

    if (this.troca.remetente.idUsuario != null && this.troca.destinatario.idUsuario != null && this.troca.cedido.idProduto != null && this.troca.recebido.idProduto != null) {
      this._msgEnviar = null;
      this._msgErro = null;
      this.srv.trocar(this.troca).subscribe((res) => {
        this._msgEnviar = "Troca feita com SUCESSO!!";
        this.troca.remetente.idUsuario = null;
        this.troca.destinatario.idUsuario = null;
        this.troca.cedido.idProduto = null;
        this.troca.recebido.idProduto = null;
      },
        (error) => {
          this._msgErro = "Erro ao enviar dados!!";
          this.troca.remetente.idUsuario = null;
          this.troca.destinatario.idUsuario = null;
          this.troca.cedido.idProduto = null;
          this.troca.recebido.idProduto = null;
        })
    }
  }
  limpaEnviar() {
    this._msgEnviar = null;
    this._msgErro = null;
  }
}
