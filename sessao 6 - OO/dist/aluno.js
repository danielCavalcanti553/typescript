"use strict";
var Aluno = /** @class */ (function () {
    function Aluno() {
        this.matricula = "" + Math.floor((Math.random() * 10000) + 1); // gera um número aleatório entre 1 e 10000
    }
    Aluno.prototype.avaliar = function () {
    };
    Aluno.prototype.cadastrar = function () {
    };
    Aluno.prototype.gerarNovaMatricula = function () {
        this.matricula = "" + Math.floor((Math.random() * 10000) + 1); // gera um número aleatório entre 1 e 10000
    };
    return Aluno;
}());
var aluno = new Aluno();
aluno.name = "Daniel";
console.log(aluno);
aluno.gerarNovaMatricula();
console.log(aluno);
