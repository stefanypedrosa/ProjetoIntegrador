import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Usuario } from '../model/Usuario';
import { Produto } from '../model/Produto';
import { BehaviorSubject } from 'rxjs';
import { ONG } from '../model/ONG';



@Injectable({
  providedIn: 'root'
})

export class WebListServiceService {

  public listaUser: Usuario[];

  constructor(private xuxa: HttpClient) { }

  public log: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);


  //usuario backend proprio
  public atualiza(usuario: Usuario){
    return this.xuxa.put("http://localhost:8080/usuario/atualiza",usuario);
  }
  public recuperaTodos(){
    return this.xuxa.get("http://localhost:8080/usuario/todos");
  }
  public recuperaDetalhe(id: number){
  return this.xuxa.get(`http://localhost:8080/usuario/${id}`);
  }
  public inserir(usuario:Usuario){
    return this.xuxa.post("http://localhost:8080/usuario/new",usuario);
  }
  public login(login: Usuario){
    return this.xuxa.post("http://localhost:8080/login", login);
  }
  // public recuperabyEmail(email: string){
  //   return this.xuxa.get(`http://localhost:8080/login/${email}`);
  // }
  
  //ong backend
  public cadastra(ong:ONG){
    return this.xuxa.post("http://localhost:8080/ong/new",ong);
  }
  
  //produto backend proprio
  public buscaDetProd( id: number){
    return this.xuxa.get(`http://localhost:8080/produto/${id}`)
  }
  public inserirp(produto:Produto){
    return this.xuxa.post("http://localhost:8080/produto/new",produto);
  }
  public obterLista(){
    return this.xuxa.get("http://localhost:8080/produto/todos")
  }
  public atualizaProd(produto: Produto){
    return this.xuxa.put("http://localhost:8080/produto/atualiza",produto);
  }
}