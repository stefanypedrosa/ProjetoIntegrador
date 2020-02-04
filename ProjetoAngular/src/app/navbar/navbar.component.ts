import { Component, OnInit } from '@angular/core';
import { WebListServiceService } from '../service/web-list-service.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  private login: String = "";
  constructor(private srv: WebListServiceService) { }

  log:boolean;

  ngOnInit() {
    this.srv.log.subscribe(value => {
      this.log = value;
    });
  }

  logout(){
    this.srv.log.next(false);
    $('#logout').click();
  }
  Login(){
    this.srv.log.next(true);
  }
}
