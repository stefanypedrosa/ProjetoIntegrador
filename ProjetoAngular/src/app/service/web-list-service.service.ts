import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { usuario } from '../model/usuario';


@Injectable({
  providedIn: 'root'
})
export class WebListServiceService {

  constructor(private xuxa: HttpClient) { }

  public obterLista(){
    return this.xuxa.get("http://cloud.professorisidro.com.br:8088/produtos")
  }
  public obterListaPorId(  id: string){
    return this.xuxa.get(`http://cloud.professorisidro.com.br:8088/produtos/${id}`)
  }
  public inserir(usuario:usuario){
    return this.xuxa.post("http://cloud.professorisidro.com.br:8088/usuario/new",usuario);
  }
}