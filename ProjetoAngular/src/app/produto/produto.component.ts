import { Component, OnInit } from '@angular/core';
import { WebListServiceService } from '../service/web-list-service.service';
import { idProduto } from '../model/idproduto';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})


export class ProdutoComponent implements OnInit {

  public idbusca: number;
  public idproduto: idProduto[];
  public _idproduto: idProduto;
  public lista: boolean;
  public _msgErro: string = null;

  constructor(private produtoBusca: WebListServiceService) { }

  ngOnInit() {
    this.pesquisarTodos();
  }

  public pesquisarTodos() {
      this._msgErro = "";
      this.lista = true
      this.produtoBusca.obterLista().subscribe((resultado: idProduto[]) => {
        this.idproduto = resultado
        this.idbusca = null;
      })
    }

  public pesquisar() {
    if (this.idbusca == null) {
      this._msgErro = "Digite algum termo de busca";
    }
    else {
      this._msgErro = "";
      this.lista = false
      this.produtoBusca.buscaDetProd(this.idbusca).subscribe((resultado: idProduto) => {
        this._idproduto = resultado;
        this.idbusca = null;

      })
    }
  }

}