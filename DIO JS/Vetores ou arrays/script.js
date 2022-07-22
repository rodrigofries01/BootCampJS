// // o que sao vetores ou arrays

// //como declarar um array 
// let array = ['String', 1, true];
// console.log(array);

// //pode guardar varios tipos de dados
// let array = ['String', 1, true, ['array1'],['array2'],['array3'],['array4']];
// console.log(array[3]);

// //manipulando array

// //forEach
// array.forEach(function(item, index){console.log(item, index)});//altera um array

// //push
// array.push([]);
// console.log(array);//add item no final do array

// //pop
// array.pop();
// console.log(array);//remove item no final do array

// //shift
// array.shift();
// console.log(array);//remove item no inicio do array

// //unshift
// array.unshift('novo item no inicio');
// console.log(array);//add item no inicio do array

// // indexof
// console.log(indexof(true));//retorna o indice de um valor 

// //splice
// array.splice(0, 3);
// console.log(array);//remove ou substitui um item pelo indice

// //slice
// let novoArray = array.slice(0, 3);
// console.log(novoArray);//retornaa uma parte nde um array exixstente

// //Objetos

let object = {string: 'string', number: 1, Boolean: true, array: ["array"], objectInterno: {objectInterno: 'objeto interno'}};

console.log(object.objectInterno);

var string = object.string;
console.log(string);

var arrayInterno = object.array;
console.log(arrayInterno);

var {string, Boolean, objectInterno} = object;
console.log(string, Boolean, objectInterno);