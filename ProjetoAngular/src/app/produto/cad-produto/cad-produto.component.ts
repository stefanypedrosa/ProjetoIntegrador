import { Component, OnInit } from '@angular/core';
import { WebListServiceService } from '../../service/web-list-service.service';
import { Router } from '@angular/router';
import { Produto } from 'src/app/model/Produto';

@Component({
  selector: 'app-cad-produto',
  templateUrl: './cad-produto.component.html',
  styleUrls: ['./cad-produto.component.css']
})
export class CadProdutoComponent implements OnInit {
  produto: Produto = new Produto;
  private filtro: any = /^([a-zA-zà-úÀ-Ú]|\s+)+$/;
  _msgErroN = null;
  _msgErroF = null;
  _msgErroT = null;
  _msgErroCA = null;
  _msgErroCL = null;
  _msgErroCO = null;
  _msgErroD = null;
  _msgEnviar = null;

  constructor(private srv: WebListServiceService, private router: Router) { }

  ngOnInit() {
    if (!localStorage.getItem("TOKEN")) {
      alert("Você não pode acessar está página sem estar logado")
      this.router.navigate(['/login']);
    }
  }

  validacao() {
    if (this.produto.nome == "" || this.produto.linkFoto == "" || this.produto.detalhes == "" || this.produto.nome == null || this.produto.linkFoto == null || this.produto.detalhes == null) {
      alert("Preencha todos os campos");
    }

    if(this.produto.tamanho == "Selecione"){
      this._msgErroT = "Escolha uma opção";
    }
    else{
      this._msgErroT = null;
    }

    if(this.produto.condicao == "Selecione"){
      this._msgErroCO = "Escolha uma opção";
    }
    else{
      this._msgErroCO = null;
    }

    if(this.produto.classificacao == "Selecione"){
      this._msgErroCL = "Escolha uma opção";
    }
    else{
      this._msgErroCL = null;
    }

    if(this.produto.categoria == "Selecione"){
      this._msgErroCA = "Escolha uma opção";
    }
    else{
      this._msgErroCA = null;
    }

    if (!this.filtro.test(this.produto.nome)) {
      this.produto.nome = "";
      this._msgErroN = "Dado inválido";
    }
    else {
      this._msgErroN = null;
    }
    
    if (this.produto.linkFoto.indexOf(".") < 2) {
      this.produto.linkFoto = "";
      this._msgErroF = "URL inválida";
    }
    else {
      this._msgErroF = null;
    }

    if (this.produto.nome != "" && this.produto.linkFoto != "" && this.produto.detalhes != "" && this.produto.categoria != "Selecione" && this.produto.tamanho != "Selecione" && this.produto.classificacao != "Selecione" && this.produto.condicao) {
      this.srv.inserirp(this.produto).subscribe((res)=>{
        this._msgEnviar = "Dados enviados com SUCESSO!!";
        this.produto.nome = "";
        this.produto.linkFoto = "";
        this.produto.detalhes = "";
        this.produto.tamanho = "Selecione";
        this.produto.categoria = "Selecione";
        this.produto.classificacao = "Selecione";
        this.produto.condicao = "Selecione";
      },
      (error)=>{
        this._msgEnviar = "Erro ao enviar dados!!";
        this.produto.nome = "";
        this.produto.linkFoto = "";
        this.produto.detalhes = "";
        this.produto.tamanho = "Selecione";
        this.produto.categoria = "Selecione";
        this.produto.classificacao = "Selecione";
        this.produto.condicao = "Selecione";
      })
    }
  }

  limpaEnviar(){
    this._msgEnviar = null;
  }
}
