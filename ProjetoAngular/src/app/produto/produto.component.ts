import { Component, OnInit } from '@angular/core';
import { WebListServiceService } from '../service/web-list-service.service';
import { Produto } from '../model/idproduto';


@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  public idbusca: string;
  public idproduto: Produto[];
  public _idproduto: Produto;
  public lista: boolean;

  

  constructor(private produtoBusca: WebListServiceService) { }

  ngOnInit() {
    this.pesquisarTodos();
  }

  public pesquisarTodos(){
    this.lista = true
    this.produtoBusca.obterLista().subscribe((resultado: Produto[])=>{
    this.idproduto = resultado
    this.idbusca = "";
    })

  }

   public pesquisar(){
    this.lista = false
    this.produtoBusca.obterListaPorId(this.idbusca).subscribe((resultado: Produto)=>{
    this._idproduto=resultado;
    this.idbusca = "";

    })

  }
  
}