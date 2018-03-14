import { Carro } from "./carro";
import { Concessionaria } from "./concessionaria";


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