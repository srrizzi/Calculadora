// O que são vetores ou arrays

/* Como declarar um array

let array = ['string', 1, true];
console.log(array)*/

/* Pode guardar vários tipos de dados

let array = ['string', 1, true, ['array1'], ['array2'], ['array3'], ['array4']]
console.log(array);  Se colocar "[]" após declarar o array "array[0]" significa que voce que um numero especifico da lista.*/

//Manipulando Arrays

/* forEach - vai fazer uma repetição para cada item ou index dentro de uma Array.

array.forEach(function(item, index){console.log(item, index)}) */

/* push - coloca um novo item do Array

array.push('novo item');
console.log(array)*/

/* pop - Ele remove um item no final do array

array.pop()
console.log(array)*/

/* shift - Ele remove um item no inicio do array

array.shift()
console.log(array)*/

/* unshift - Adiciona um item no inicio do Array

array.unshift(7)
console.log(array)*/

/* indexOf - Retorna o indice de um valor

console.log(array.indexOf(true))*/

/* splice - Remove ou substitui um item pelo índice

array.splice(0, 4);
console.log(array)*/

/* slice - Retorna uma parde da Array existente

let novoArray = array.slice(0, 3);
console.log(novoArray);*/

/*let object = { string: 'Lol', number: 7, boolean: false, array: ['teste'], objectInterno: {objectInterno: 'objeto Interno'}};
console.log(object.objectInterno); // Assim ele vai retornar um Objeto em especifico

var string = object.string; //Destruturação
console.log(string);

var array = object.array //Destruturação
console.log(array)

var {string, number, array} = object;
console.log(string, number, array) */