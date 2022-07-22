//tipos primitivos 

//boolean
var vOuF = false;
console.log(typeof(vOuF));

//number
var numeroQualquer = 1;
console.log(typeof(numeroQualquer));

//string
var nome = 'Rodrigo';
console.log(typeof('nome'));

//function
var funcao = function(){
  console.log(typeof(funcao));
}

//como declarar
var variavel = 'Rodrigo';
variavel = 'Fries';
console.log(typeof(variavel));

let variavel2 = 'peter';
variavel2 = 'Griffin';
console.log(variavel2);

const constante = 'rodrigo';
constante = 'fries';
console.log(constante);

//escopo

var escopoGlobal = 'global';
console.log(escopoGlobal);

function escopoLocal(){
  let escopoLocalinterno = 'local';
  console.log(escopoLocalinterno);
}

escopoLocal();

//atribuição

var atribuição = 'Rodrigo';

//comparação
var comparacao = '0' == 0;
console.log(comparacao);

//comparacao identica
var comparacaoIdentica = '0' === 0;
console.log(comparacaoIdentica);

//adicao
var adicao = 1 + 1;
console.log(adicao);

//subtracao
var subtracao = 2 - 1;
console.log(subtracao);

//multiplicacao
var multiplicacao = 5 * 5;
console.log(multiplicacao);

//divisao
var divisao = 6 / 2;
console.log(divisao);

// resto 
var restoDivisao = 6 % 2;
console.log(restoDivisao);

//potenciacao
var potenciacao = 2 ** 10;
console.log(potenciacao);

//marior que
var maiorQue = 10 > 5;
console.log(maiorQue);

//menorQue
var menorQue = 5 > 15;
console.log(menorQue);

//maior ou igual
var maiorOuIgual = 15 > 5;
console.log(maiorOuIgual);

// menor ou igual
var menorOuIgual = 5 > 15;
console.log(menorOuIgual);

//operadores logicos

var e = true && true;
console.log(e);

var ou = false || false;
console.log(ou);

var nao = !true;
console.log(nao);