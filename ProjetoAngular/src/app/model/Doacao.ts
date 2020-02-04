import { Usuario } from './Usuario';
import { Produto } from './Produto';
import { ONG } from './ONG';

export class Doacao{
    iddoacao:number;
    dataD:string;
    usuario:Usuario;
    produto:Produto;
    ong:ONG;   
}