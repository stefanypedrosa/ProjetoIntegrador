import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { WebListServiceService } from 'src/app/service/web-list-service.service';
import { idProduto } from 'src/app/model/idproduto';

@Component({
  selector: 'app-edita-produto',
  templateUrl: './edita-produto.component.html',
  styleUrls: ['./edita-produto.component.css']
})
export class EditaProdutoComponent implements OnInit {

  constructor(private router: Router, private rota: ActivatedRoute, private srv: WebListServiceService) { }

  private id: string;
  private produto: idProduto = new idProduto;
  _msgEnviar = null;

  ngOnInit() {
    if (!localStorage.getItem("TOKEN")) {
      alert("Você não pode acessar está página sem estar logado")
      this.router.navigate(['/login']);
    }
    else {
      this.id = this.rota.snapshot.params["id"];

      this.srv.buscaDetProd(this.id).subscribe((res: idProduto) => {
        this.produto = res;
      });
      // this.srv.atualizaProd(this.produto).subscribe(res => {
      //   this._msgEnviar = "Dados enviados com SUCESSO!!";
      // }
  }
  }
}
