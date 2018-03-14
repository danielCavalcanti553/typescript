class Carro{
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


class Concessionaria{
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

let car1 = new Carro('Gol','JS-212', 'preto');
let car2 = new Carro('Palio','JK-226', 'azul');
let list : Carro[] = [car1,car2];

let c = new Concessionaria("Rio de Janeiro");
c.setListCar(list);

//for(let car of c.getListCar()){
//    console.log(car.getModelo());
//}

c.getListCar().map((carro: Carro) => {
    console.log(carro.getModelo());
});



