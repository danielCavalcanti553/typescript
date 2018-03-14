"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Cliente = /** @class */ (function () {
    function Cliente() {
    }
    Cliente.prototype.salvarDados = function (nome, endereco) {
        console.log("Cadastrado com sucesso");
    };
    Cliente.prototype.listarDados = function () {
        throw new Error("Method not implemented.");
    };
    return Cliente;
}());
exports.Cliente = Cliente;
