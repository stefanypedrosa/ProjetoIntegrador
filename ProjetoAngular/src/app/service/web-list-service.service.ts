import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Usuario } from '../model/Usuario';
import { Produto } from '../model/Produto';
import { BehaviorSubject } from 'rxjs';
import { ONG } from '../model/ONG';
import { Troca } from '../model/Troca';
import { Doacao } from '../model/Doacao';



@Injectable({
  providedIn: 'root'
})

export class WebListServiceService {
  public listaUser: Usuario[];
  constructor(private xuxa: HttpClient) { }

  public log: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);


  //usuario backend proprio
  public login(login: Usuario){
    return this.xuxa.post("http://localhost:8080/usuario/login", login);
  }
  public inserir(usuario:Usuario){
    return this.xuxa.post("http://localhost:8080/usuario/create",usuario);
  }
  public recuperaDetalhe(idUsuario: number){
  return this.xuxa.get(`http://localhost:8080/usuario/read/${idUsuario}`);
  }
  public recuperaTodos(){
    return this.xuxa.get("http://localhost:8080/usuario/todos");
  }
  public atualiza(usuario: Usuario){
    return this.xuxa.put(`http://localhost:8080/usuario/update`, usuario);
  }
  public buscarInfo(token: string){
    return this.xuxa.get("http://localhost:8080/userinfo?token="+token);
  }
  public BuscaDetalhesProd(token:String){
    return this.xuxa.get("http://localhost:8080/detalhes?token="+token);
  }

  //ong backend
  public cadastra(ong:ONG){
    return this.xuxa.post("http://localhost:8080/ong/create",ong);
  }
  public consulta(idOng: number){
    return this.xuxa.get(`http://localhost:8080/ong/read/${idOng}`);
  }
  public consultaTudo(){
    return this.xuxa.get("http://localhost:8080/ong/todos")
  }
  public atualizaOng(ong: ONG){
    return this.xuxa.put("http://localhost:8080/ong/update",ong);
  }

  
  //produto backend proprio
  public inserirp(produto:Produto){
    return this.xuxa.post("http://localhost:8080/produto/create",produto);
  }
  public buscaDetProd( idProduto: number){
    return this.xuxa.get(`http://localhost:8080/produto/read/${idProduto}`)
  }
  public obterLista(){
    return this.xuxa.get("http://localhost:8080/produto/todos")
  }
  public atualizaProd(produto: Produto){
    return this.xuxa.put("http://localhost:8080/produto/update",produto);
  }


  //troca backend proprio
  public trocar(troca:Troca){
    return this.xuxa.post("http://localhost:8080/trocar/create",troca);
  }
  public consultaTroca( idTroca: number){
    return this.xuxa.get(`http://localhost:8080/trocar/read/${idTroca}`)
  }


  //doacao backend proprio
  public doar(doar:Doacao){
    return this.xuxa.post("http://localhost:8080/doar/create",doar);
  }
  public consultaDoacao( idDoacao: number){
    return this.xuxa.get(`http://localhost:8080/doar/read/${idDoacao}`)
  }

}