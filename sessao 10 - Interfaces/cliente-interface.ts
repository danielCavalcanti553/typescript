import { Cliente } from "./cliente";

export interface ClienteInterface{
    
    salvarDados(nome:string, endereco:string) : void;
    listarDados() : Array<Cliente>;

}