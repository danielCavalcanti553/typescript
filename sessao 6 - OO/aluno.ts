class Aluno{
    private matricula : string;
    name : string;
    private endereco : string;
    private telefone : string;
    private idade : number;

    constructor(){
        this.matricula = ""+Math.floor((Math.random() * 10000) + 1); // gera um número aleatório entre 1 e 10000
    }

    public avaliar() : void{
    }

    public cadastrar() : void{
    }

    public gerarNovaMatricula() : void{
        this.matricula = ""+Math.floor((Math.random() * 10000) + 1); // gera um número aleatório entre 1 e 10000
    }
}

let aluno = new Aluno();
aluno.name = "Daniel";
console.log(aluno);
aluno.gerarNovaMatricula();
console.log(aluno);