/* Tipos primitivos

// Boolean

var VouF = false;
console.log(VouF);
console.log(typeof(VouF)); //Irá mostrar no console qual é o tipo da variavel

var numeroQualquer = 1;
console.log(typeof(numeroQualquer));

var nome = 'diana';
console.log(typeof(nome));

var funcao = function(){}
console.log(typeof(funcao));

// Como declarar as variaveis

var variavel = 'Rizzi' // Se não atribuir valor irá dar retornar undefined
variavel = 'Carlos'
console.log(variavel)

let variavel2 = 'Rizzi'// Se não atribuir valor irá dar retornar null
variavel2 = 'Alberto'
console.log(variavel2)

const constante = 'Doido'// Se não atribuir valor irá dar retornar um ERRO porque precisa de um valor inicial
console.log(constante) // E esse valor não pode ser alterado. 

// Escopo Global e Local

var escopoGlobal = 'global'
console.log(escopoGlobal)

function escopoLocal () {
    let escopoLocalInterno = 'local' // por ele estar dentro de uma função dará erro caso voce invoque esse escopo
    console.log(escopoLocalInterno)// por ser um Local ele precisa ser exibido
}

escopoLocal() // Isso é utilizado para invocar o escopo local e irá aparecer em seu console. 

// Atribuições

var atribuicao = 'teste'

// Comparação

var comparacao = '0' == 0
console.log(comparacao)

// Comparação identica

var comparacaoIdentica = '0' === 0
console.log(comparacaoIdentica)

// Adição

var adicao = 1 + 1
console.log(adicao)

// Subtração

var subtracao = 1 - 1
console.log(subtracao)

// Divisão Real 

var divisao = 10 / 2
console.log(divisao)

// Multiplicação

var multiplicacao = 2 * 2
console.log(multiplicacao)

// Divisão Inteira

var divisaoInteira = 5 % 2
console.log(divisaoInteira)

// Potenciação

var potencia = 2 ** 10
console.log(potencia) 

// Operadores Relacionais
// Maior Que

var maiorQue = 10 > 3;
console.log(maiorQue)

// Menor Que

var menorQue = 10 < 3;
console.log(menorQue)

// Maior ou igual a 

var maiorIgual = 10 >= 15;
console.log(maiorIgual)

// Menor ou igual a 

var menorIgual = 10 <= 15;
console.log(menorIgual) 

// Operadores Lógicos

// E

var e = true && false
console.log(e)

// OU

var ou = true || false
console.log(ou)

// NÃO

var nao = !true
console.log(nao)*/