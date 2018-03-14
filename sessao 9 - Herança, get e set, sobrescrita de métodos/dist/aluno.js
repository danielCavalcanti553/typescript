"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var pessoa_1 = require("./pessoa");
var Aluno = /** @class */ (function (_super) {
    __extends(Aluno, _super);
    function Aluno(nome, endereco, telefone, email, idade, turma) {
        var _this = _super.call(this) || this;
        _this.turma = turma;
        _this.nome = nome;
        _this.endereco = endereco;
        _this.telefone = telefone;
        _this.endereco = email;
        _this.idade = idade;
        return _this;
    }
    Aluno.prototype.getDados = function () {
        console.log("Nome: " + this.nome);
        console.log("Endereco: " + this.endereco);
        console.log("Telefone: " + this.telefone);
        console.log("Email: " + this.email);
        console.log("turma: " + this.turma);
    };
    return Aluno;
}(pessoa_1.Pessoa));
exports.Aluno = Aluno;
