"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
exports.Concessionaria = Concessionaria;
