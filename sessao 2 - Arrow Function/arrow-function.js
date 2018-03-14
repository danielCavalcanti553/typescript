
/*
NORMAL
var somarNumeros = function(numero1, numero2){

NENHUM PARAMETRO
var somarNumeros = () =>{

1 PARAMETRO
var somarNumeros = numero1 =>{

SEM USO DE PARÊNTERES, QUANTO UMA ÚNICA LINHA NO ESCOPO DA FUNÇÃO
var somarNumeros = (numero1, numero2) =>  numero1 + numero2;

*/
var somarNumeros = (numero1, numero2) =>{
    
    return numero1 + numero2;
}

console.log(somarNumeros(20,30));