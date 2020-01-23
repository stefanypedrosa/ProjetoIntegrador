import { Component, OnInit } from '@angular/core';
import { WebListServiceService } from '../../service/web-list-service.service';
import { usuario } from '../../model/usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-consulta-usuarios',
  templateUrl: './consulta-usuarios.component.html',
  styleUrls: ['./consulta-usuarios.component.css'],
})

export class ConsultaUsuariosComponent implements OnInit {

  public listaUser: usuario[];

  usuario: usuario;

  constructor(private router: Router, private srv: WebListServiceService ) { }

  ngOnInit() {
    if (!localStorage.getItem("TOKEN")) {
      alert("Você não pode acessar está página sem estar logado")
      this.router.navigate(['/login']);
    }

    this.srv.recuperaTodos().subscribe((resp: usuario[]) => {
      this.listaUser = resp;
    });
  }
}
