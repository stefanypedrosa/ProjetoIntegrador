import { Produto } from './Produto';
import { Usuario } from './Usuario';

export class Troca{
    idTroca:number;
    dataT:string;
    idCedido: Produto;
    recebido:Produto;
    remetente:Usuario;
    destinatario:Usuario;
}