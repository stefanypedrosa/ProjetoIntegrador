import { Component, OnInit } from '@angular/core';
import { NgModelGroup } from '@angular/forms';
import { Produto } from '../model/Produto';
import { Usuario } from '../model/usuario'
// CORRIGIR VALIDACOES
@Component({
  selector: 'app-trocas',
  templateUrl: './trocas.component.html',
  styleUrls: ['./trocas.component.css']
})
export class TrocasComponent implements OnInit {
  private idTroca: number;
  private dataT: string;
  private cedido: Produto;
  private recebido: Produto;
  private remetente: Usuario;
  private destinatario: Usuario;

  private filtro: any = /^([a-zA-zà-úÀ-Ú]|\s+)+$/;
  private num: any = /^[0-9]+$/;

  private _msgErroR: string = null;
  private _msgErroD: string = null;
  private _msgErroC: string = null;
  private _msgErroRec: string = null;
  private _msgEnviar: string = null;
  
  

  constructor() { }

  ngOnInit() {

  }
  validacao() {
    if (this.remetente == null || this.destinatario == null || this.cedido == null || this.recebido == null) {
      alert('Preencha todos os campos');
    }
    if (!this.filtro.test(this.remetente)) {
      this.remetente = null;
      this._msgErroR = "Remetente inválido";
    }
    else {
      this._msgErroR = null;
    }
    if (!this.filtro.test(this.destinatario)) {
      this.destinatario = null;
      this._msgErroD = "Destinatario inválido";
    }
    else {
      this._msgErroD = null;
    }
    if (!this.num.test(this.cedido)) {
      this.cedido = null;
      this._msgErroC = "Ops, verifique o código do seu produto";
    }
    else {
      this._msgErroC = null;
    }
    if (!this.num.test(this.recebido)) {
      this.recebido = null;
      this._msgErroRec = "Ops, verifique o código do produto a ser trocado";
    }
    else {
      this._msgErroRec = null;
    }
    

    if (this.remetente != null && this.destinatario != null && this.cedido != null && this.recebido != null) {
      this._msgEnviar = "Dados enviados com SUCESSO!!";
      this.remetente = null;
      this.destinatario = null;
      this.cedido = null;
      this.recebido = null;
    }
  }

}
