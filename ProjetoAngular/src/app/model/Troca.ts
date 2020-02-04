import { Produto } from './Produto';
import { Usuario } from './Usuario';

export class Troca{
    idTroca:number;
    dataT:string;
    cedido: Produto;
    recebido:Produto;
    remetente:Usuario;
    destinatario:Usuario;
}