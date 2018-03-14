"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Livro = /** @class */ (function () {
    function Livro(titulo, autor, genero) {
        this.titulo = titulo;
        this.genero = genero;
    }
    Livro.prototype.getCadastrar = function () {
        console.log("Cadastrado com sucesso");
    };
    Livro.prototype.getLista = function () {
    };
    return Livro;
}());
exports.Livro = Livro;
