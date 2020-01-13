import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WebListServiceService } from '../../service/web-list-service.service';


@Component({
  selector: 'app-edita-usuario',
  templateUrl: './edita-usuario.component.html',
  styleUrls: ['./edita-usuario.component.css']
})
export class EditaUsuarioComponent implements OnInit {

  private nome: string;
  private email: string;
  private tel: string;
  private senha: string;
  // private confSenha: string;

  private filtro: any = /^([a-zA-zà-úÀ-Ú]|\s+)+$/;
  private num: any = /^[0-9]+$/;
  private carEsp: any = /[@#$%&]/;
  private numFiltro: any = /[^0-9A-Za-z]*/;

  private _msgErroN: string = null 
  private _msgErroE: string = null 
  private _msgErroT: string = null 
  private _msgErroS: string = null;
  // private _msgErroCS: string = null;

  private _msgErroSFA: string = null;
  private _msgErroSFO: string = null;
  private _msgEnviar: string = null;

  public nomeUsuario:WebListServiceService = new WebListServiceService();
  private id: number;

  constructor(private rota: ActivatedRoute, private servece: WebListServiceService) { }

  ngOnInit() {
    this.id = this.rota.snapshot.params["id"];
    
    this.servece.reculperaDetalhe(this.id).subscribe((res:nomeUsuario)=>{
      this.nomeUsuario = res;

    });
  }

  validacao(){

    if (this.nome == "" || this.email == "" || this.tel == null || this.senha == "") {
      alert('Preencha todos os campos');  
    }

    if (!this.filtro.test(this.nome)) {
      this.nome = "";
      this._msgErroN = "Dado inválido";
    }
    else {
      this._msgErroN = null;
    }

    if(this.nome.indexOf(" ") < 1){
      this.nome = "";
      this._msgErroN = "Digite o nome completo";
    }
    else {
      this._msgErroN = null;
    }

    if (this.email.indexOf("@") == -1 && this.email.indexOf("@") > 1 || this.email.indexOf(".") == -1) {
      this.email = "";
      this._msgErroE = "Dado inválido";
    }
    else {
      this._msgErroE = null;
    }

    //validacao do tel
    /*if (!this.num.test(this.tel)) {
      this.tel = null;
      this._msgErroT = `Apenas digitos`;
    }
    else {
      this._msgErroT = null;
    }*/

    if (this.tel.length < 10 || !this.num.test(this.tel)) {
      this.tel = null;
      this._msgErroT = `Digite um telefone válido`;
    }
    else {
      this._msgErroT = null;
    }

    if (this.senha.length < 10) {
      this._msgErroSFA = null;
      this._msgErroSFO = null;
      this.senha ="";
      this._msgErroS = `A senha deve conter no minimo 10 caracteres`;
    }
    else {
      this._msgErroS = null;
    }

    //senha fraca ou forte
    /*if(this.carEsp.test(this.senha)){
      this._msgErroSFA = null;
      this._msgErroSFO = "Senha forte";
    }
    else if (this.filtro.test(this.senha) || this.num.test(this.senha) || this.numFiltro.test(this.senha)){
      this._msgErroSFO = null;
      this._msgErroSFA = "Senha fraca";
    }
    else{
      this._msgErroSFA = null;
      this._msgErroSFO = null;
    }*/
    
    // if(this.confSenha === this.senha){
    //   this._msgErroCS = null;
    // }
    // else{
    //   this.confSenha= "";
    //   this._msgErroCS = "As senhas nâo conferem";
    // }

    if (this.nome != "" && this.email != "" && this.tel != null && this.senha != "") {
      this._msgEnviar = "Dados enviados com SUCESSO!!";
      this.enviarAlteracoes();
      //alert("Dados enviados com SUCESSO!!");
      this.nome = "";
      this.email = "";
      this.tel = null;
      this.senha = "";
      this._msgErroSFA = null;
      this._msgErroSFO = null;

    }
  }

  vSenha(){
    if(this.carEsp.test(this.senha) && this.senha.length >= 10){
      this._msgErroS = null;
      this._msgErroSFA = null;
      this._msgErroSFO = "Senha forte";
    }
    else if (this.filtro.test(this.senha) || this.num.test(this.senha) || this.numFiltro.test(this.senha)){
      this._msgErroS = null;
      this._msgErroSFO = null;
      this._msgErroSFA = "Senha fraca";
    }
    else{
      this._msgErroSFA = null;
      this._msgErroSFO = null;
    }
  }

enviarAlteracoes() {
  this.servece.atualiza(this.nomeUsuario).subscribe(
    (res)=>{
      console.log("Atualizado com sucesso");
    },
    (err)=>{
      console.log("Erro ao Atualizar");
    }
  );


}

  limpaEnviar(){
    this._msgEnviar = null;
  }

}

  

