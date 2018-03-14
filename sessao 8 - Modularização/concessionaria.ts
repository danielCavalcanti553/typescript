import { Carro } from "./carro";

export class Concessionaria{
    private local : string;
    private listCar : Carro[];

    constructor(local : string){
        this.local = local;
    }

    setListCar(list : Carro[]){
        this.listCar = list;
    }

    getListCar(){
        return this.listCar;
    }
}




