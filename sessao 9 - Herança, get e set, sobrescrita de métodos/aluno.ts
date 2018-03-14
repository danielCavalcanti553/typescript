import { Pessoa } from "./pessoa";

export class Aluno extends Pessoa{
    public turma : string;

    constructor(nome: string,endereco: string,telefone: string,email: string,idade: number, turma:string){
        super();
        this.turma = turma;
        this.nome = nome;
        this.endereco = endereco;
        this.telefone = telefone;
        this.endereco = email;
        this.idade = idade;
    }


    getDados(){
        
        console.log("Nome: "+ this.nome);   
        console.log("Endereco: "+ this.endereco);
        console.log("Telefone: "+ this.telefone);
        console.log("Email: "+ this.email);
        console.log("turma: "+ this.turma);
        
    }
}