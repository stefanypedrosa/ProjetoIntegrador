import { Component, OnInit } from '@angular/core';
import { WebListServiceService } from '../../service/web-list-service.service';
import { usuario } from '../../model/usuario';

@Component({
  selector: 'app-consulta-usuarios',
  templateUrl: './consulta-usuarios.component.html',
  styleUrls: ['./consulta-usuarios.component.css']
})

export class ConsultaUsuariosComponent implements OnInit {

  public listaUser: usuario[];

  constructor(private srv: WebListServiceService ) { }

  ngOnInit() {
    this.srv.recuperaTodos().subscribe((res: usuario[])=>{
      this.listaUser = res;
    });
  }

}
