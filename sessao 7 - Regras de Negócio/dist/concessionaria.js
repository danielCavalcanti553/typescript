"use strict";
var Carro = /** @class */ (function () {
    function Carro(modelo, placa, cor) {
        this.placa = placa;
        this.modelo = modelo;
        this.cor = cor;
    }
    Carro.prototype.getModelo = function () {
        return this.modelo;
    };
    return Carro;
}());
var Concessionaria = /** @class */ (function () {
    function Concessionaria(local) {
        this.local = local;
    }
    Concessionaria.prototype.setListCar = function (list) {
        this.listCar = list;
    };
    Concessionaria.prototype.getListCar = function () {
        return this.listCar;
    };
    return Concessionaria;
}());
var car1 = new Carro('Gol', 'JS-212', 'preto');
var car2 = new Carro('Palio', 'JK-226', 'azul');
var list = [car1, car2];
var c = new Concessionaria("Rio de Janeiro");
c.setListCar(list);
//for(let car of c.getListCar()){
//    console.log(car.getModelo());
//}
c.getListCar().map(function (carro) {
    console.log(carro.getModelo());
});
