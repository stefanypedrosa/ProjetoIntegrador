import { Component, OnInit } from '@angular/core';
import { usuario } from '../model/usuario';
import { WebListServiceService } from 'src/app/service/web-list-service.service';
import {Router} from '@angular/router';
import { Globals } from '../model/login';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ Globals ]
})
export class HomeComponent implements OnInit {
  usuario: string;
  constructor() { }

  ngOnInit() {
    if(localStorage.getItem("nome")){
      Globals.nome = localStorage.getItem("nome");
      this.usuario = Globals.nome;
    }
  }
}
