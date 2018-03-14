export class Carro{
    private modelo : string;
    private placa : string;
    private cor : string;
    
    constructor(modelo : string, placa : string, cor: string){
        this.placa = placa;
        this.modelo = modelo;
        this.cor = cor;
    }

    getModelo(){
        return this.modelo;
    }
}