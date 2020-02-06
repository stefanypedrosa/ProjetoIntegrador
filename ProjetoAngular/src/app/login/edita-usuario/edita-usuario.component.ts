import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WebListServiceService } from '../../service/web-list-service.service';
import { Usuario } from 'src/app/model/Usuario';
import { ONG } from 'src/app/model/ONG';


@Component({
  selector: 'app-edita-usuario',
  templateUrl: './edita-usuario.component.html',
  styleUrls: ['./edita-usuario.component.css']
})
export class EditaUsuarioComponent implements OnInit {

  ong:ONG = new ONG;

  id: number;

  constructor(private rota: ActivatedRoute, private srv: WebListServiceService, private router:Router) { }

  ngOnInit() {
    this.id = this.rota.snapshot.params["id"];
    
    this.srv.consulta(this.id).subscribe((res:ONG)=>{
      this.ong = res;

    });
  }

  encerrar(){
    this.router.navigate(['/consultaongs']);
  }
}

  

