import { Component, OnInit } from '@angular/core';
import { WebListServiceService } from '../service/web-list-service.service';
import {Usuario} from '../model/usuario';
import {GlobalsUsuario} from '../model/GlobalsUsuario';
import { Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  private login: String = "";
  private user:Usuario = new Usuario();
  constructor(private srv: WebListServiceService,private router: Router) { }

  log:boolean;

  ngOnInit() {
    // this.srv.log.subscribe(value => {
    //   this.log = value;
    // });
    this.srv.buscarInfo(localStorage.getItem("TOKEN")).subscribe(
      (res: Usuario) => {
        GlobalsUsuario.usuario = res;
        this.user = res;
          console.log("USER INFO...");
          console.log(res);
      },
      (err) => {
        this.user = null;
        console.log("ERRO!!!");
      }
    );
  }

  logout(){
    this.srv.log.next(false);
    localStorage.removeItem("TOKEN");
    localStorage.clear();
    
    $('#logout').click();

    this.user = null;
  
}
  Login(){
    this.srv.log.next(true);
  }
}
