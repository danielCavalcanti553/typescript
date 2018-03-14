"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Pessoa = /** @class */ (function () {
    function Pessoa() {
    }
    Pessoa.prototype.getDados = function () {
        console.log("Nome: " + this._nome);
        console.log("Endereco: " + this._endereco);
        console.log("Telefone: " + this._telefone);
        console.log("Email: " + this._email);
    };
    Object.defineProperty(Pessoa.prototype, "nome", {
        get: function () {
            return this._nome;
        },
        set: function (value) {
            this._nome = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Pessoa.prototype, "endereco", {
        get: function () {
            return this._endereco;
        },
        set: function (value) {
            this._endereco = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Pessoa.prototype, "telefone", {
        get: function () {
            return this._telefone;
        },
        set: function (value) {
            this._telefone = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Pessoa.prototype, "email", {
        get: function () {
            return this._email;
        },
        set: function (value) {
            this._email = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Pessoa.prototype, "idade", {
        get: function () {
            return this._idade;
        },
        set: function (value) {
            if (value < 16)
                console.log('IDADE NÃO PERMITIDA');
            this._idade = value;
        },
        enumerable: true,
        configurable: true
    });
    return Pessoa;
}());
exports.Pessoa = Pessoa;
