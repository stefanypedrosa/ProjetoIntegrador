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
    return this.xuxa.put("http://localhost:8080/usuario/update",usuario);
  }
  public recuperaTodos(){
    return this.xuxa.get("http://localhost:8080/usuario/todos");
  }
  public recuperaDetalhe(id: number){
  return this.xuxa.get(`http://localhost:8080/usuario/read/${id}`);
  }
  public inserir(usuario:Usuario){
    return this.xuxa.post("http://localhost:8080/usuario/create",usuario);
  }
  public login(login: Usuario){
    return this.xuxa.post("http://localhost:8080/usuario/login", login);
  }
  public delete(id:number){
    return this.xuxa.delete(`http://localhost:8080/usuario/delete/${id}`);
  }
  

  //ong backend
  public cadastra(ong:ONG){
    return this.xuxa.post("http://localhost:8080/ong/create",ong);
  }
  public consulta(id: number){
    return this.xuxa.get(`http://localhost:8080/ong/read/${id}`);
  }
  public atualizaOng(ong: ONG){
    return this.xuxa.put("http://localhost:8080/ong/update",ong);
  }

  
  //produto backend proprio
  public buscaDetProd( id: number){
    return this.xuxa.get(`http://localhost:8080/produto/read/${id}`)
  }
  public inserirp(produto:Produto){
    return this.xuxa.post("http://localhost:8080/produto/create",produto);
  }
  public obterLista(){
    return this.xuxa.get("http://localhost:8080/produto/todos")
  }
  public atualizaProd(produto: Produto){
    return this.xuxa.put("http://localhost:8080/produto/update",produto);
  }
  public deleteProduto(id:number){
    return this.xuxa.delete(`http://localhost:8080/produto/delete/${id}`);
  }
}