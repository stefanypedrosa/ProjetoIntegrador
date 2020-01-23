import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  private login: String = "";
  constructor() { }

  ngOnInit() {
    if (!localStorage.getItem("TOKEN")) {
      this.login = "Login";
    }
    else {
      this.login = "Logout";
    }
  }
}
