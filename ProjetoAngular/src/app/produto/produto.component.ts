import { Component, OnInit } from '@angular/core';
import { WebListServiceService } from '../service/web-list-service.service';
import { Produto } from '../model/Produto';
import {GlobalsProduto} from '../model/GlobalsProduto';
import {Router} from '@angular/router';


@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})


export class ProdutoComponent implements OnInit {

  public idbusca: number;
  public idproduto: Produto[];
  public _idproduto: Produto;
  public prodModal: Produto = new Produto();
  public lista: boolean;
  public _msgErro: string = null;
  public id:number;
  public palavraChave:String;

  constructor(private produtoBusca: WebListServiceService,private router:Router) { }

  ngOnInit() {
    this.pesquisarTodos();
  }

  atribuiModal(id:number){
    this.produtoBusca.buscaDetProd(id).subscribe(
      (res:Produto)=>{
        this.prodModal = res
      }
    );
  }
   public CompartilhaDados(){
    this.produtoBusca.buscaDetProd(this.id).subscribe(
      (res:Produto)=>{
        GlobalsProduto.produto = res;
        this.router.navigate(['modalproduto']);
        },
    )
   }

  public pesquisarTodos() {
      this._msgErro = "";
      this.lista = true
      this.produtoBusca.obterLista().subscribe((resultado: Produto[]) => {
        this.idproduto = resultado
        this.idbusca = null;
      })
    }

  public pesquisar() {
    if (this.palavraChave == null) {
      this._msgErro = "";
      this.lista = true
      this.produtoBusca.obterLista().subscribe((resultado: Produto[]) => {
        this.idproduto = resultado
        this.idbusca = null;
      })
    }
    else {
      this.produtoBusca.buscaPalavraChave(this.palavraChave).subscribe((res: Produto[]) => {

        this.idproduto = res;
        console.log(this.idproduto);
        this.palavraChave = null;
      
    },
    (error)=>{
     console.log("não encontrou")
    });
    }
  }

}