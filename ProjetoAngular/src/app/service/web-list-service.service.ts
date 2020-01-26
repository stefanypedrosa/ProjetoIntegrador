import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { usuario } from '../model/usuario';
import { idProduto } from '../model/idproduto';
import { BehaviorSubject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})

export class WebListServiceService {

  public listaUser: usuario[];

  constructor(private xuxa: HttpClient) { }

  public log: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);


  //usuario backend proprio
  public atualiza(usuario: usuario){
    return this.xuxa.put("http://localhost:8080/usuario/atualiza",usuario);
  }
  public recuperaTodos(){
    return this.xuxa.get("http://localhost:8080/usuario/todos");
  }
  public recuperaDetalhe(id: number){
  return this.xuxa.get(`http://localhost:8080/usuario/${id}`);
  }
  public inserir(usuario:usuario){
    return this.xuxa.post("http://localhost:8080/usuario/new",usuario);
  }
  public login(login: usuario){
    return this.xuxa.post("http://localhost:8080/login", login);
  }
  // public recuperabyEmail(email: string){
  //   return this.xuxa.get(`http://localhost:8080/login/${email}`);
  // }
  
  
  //produto backend proprio
  public buscaDetProd( id: number){
    return this.xuxa.get(`http://localhost:8080/produto/${id}`)
  }
  public inserirp(produto:idProduto){
    return this.xuxa.post("http://localhost:8080/produto/new",produto);
  }
  public obterLista(){
    return this.xuxa.get("http://localhost:8080/produto/todos")
  }
  public atualizaProd(produto: idProduto){
    return this.xuxa.put("http://localhost:8080/produto/atualiza",produto);
  }
}