import { Produto } from './Produto';
import { Usuario } from './Usuario';

export class Troca{
    public idTroca:number;
    public dataT:string;
    public cedido:Produto=new Produto;
    public recebido:Produto=new Produto;
    public remetente:Usuario=new Usuario;
    public destinatario:Usuario=new Usuario;
}