"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
exports.Carro = Carro;
