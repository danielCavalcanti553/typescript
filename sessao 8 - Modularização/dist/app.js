"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var carro_1 = require("./carro");
var concessionaria_1 = require("./concessionaria");
var car1 = new carro_1.Carro('Gol', 'JS-212', 'preto');
var car2 = new carro_1.Carro('Palio', 'JK-226', 'azul');
var list = [car1, car2];
var c = new concessionaria_1.Concessionaria("Rio de Janeiro");
c.setListCar(list);
//for(let car of c.getListCar()){
//    console.log(car.getModelo());
//}
c.getListCar().map(function (carro) {
    console.log(carro.getModelo());
});
