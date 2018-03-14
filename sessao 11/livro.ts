export class Livro{
    
    titulo : string;
    genero : string;

	constructor(titulo:string,autor:string,genero:string) {
        this.titulo = titulo;
        this.genero = genero;
    }

    getCadastrar(){
        console.log("Cadastrado com sucesso");
    }
    
    getLista(){
        
    }
    
}