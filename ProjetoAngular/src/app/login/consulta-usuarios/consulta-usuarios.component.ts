import { Component, OnInit } from '@angular/core';
import { WebListServiceService } from '../../service/web-list-service.service';
import { Usuario } from '../../model/Usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-consulta-usuarios',
  templateUrl: './consulta-usuarios.component.html',
  styleUrls: ['./consulta-usuarios.component.css'],
})

export class ConsultaUsuariosComponent implements OnInit {

  public listaUser: Usuario[];

  usuario: Usuario;

  constructor(private router: Router, private srv: WebListServiceService ) { }

  ngOnInit() {
    if (!localStorage.getItem("TOKEN")) {
      alert("Você não pode acessar está página sem estar logado")
      this.router.navigate(['/login']);
    }

    this.srv.recuperaTodos().subscribe((resp: Usuario[]) => {
      this.listaUser = resp;
    });
  }
}
