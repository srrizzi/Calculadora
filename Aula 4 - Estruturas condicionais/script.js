/*
var player1 = 0
var player2 = -1
var placar;

// if ternário

player1 != -1 && player2 != -1 ? console.log('Os Players são válidos!!') : console.log('Jogadores Inválidos')

// Usando If
if (player1 > 0 && player2 == 0){
    console.log('Player 1 marcou ponto!')
    placar = player1 > player2
}
// Usando Else If
else if (player2 > 0 && player1 == 0) {
    console.log('Player 2 marcou ponto!')
    placar = player2 > player1
}
// Usando Else
else {
    console.log('Ninguem marcou ponto')
}
// Usando Switch
switch (placar) {
    case placar = player1 > player2:
        console.log('Player 1 ganhou !!')
        break
    case placar = player2 > player1:
        console.log('Player 2 ganhou !!')
        break
    default:
        console.log('Ninguem ganhou')    
}  

let array = ['v1','v2','v3','v4','v5']
let object = { propriedade1: 'v1', propriedade2: 'v2', propriedade3: 'v3'}

// For - Executar uma instrução até que ela seja falsa
for ( let indice = 0; indice < array.length; indice++){
    console.log(indice)
}

// for/in - Executa repetição a partir de uma propriedade
// Com Array
for (let i in array) {
    console.log(i)
}
// Com object
for (i in object) {
    console.log(i)
}   

// For/of - Executa repetição a partir de um valor
// Com Array
for (i of array) {
    console.log(i)
}
// Com object - não da para utilizar com Object // pois propriedades variam 
for (i of object.propriedade1) {
    console.log(i)
}   

var a = 0

while (a < 10){
    a++
    console.log(a)
}

do {
    a++
    console.log(a)
} while (10 < a)

*/