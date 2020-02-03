import { Component, OnInit } from '@angular/core';
import { Globals } from '../model/Login';

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
