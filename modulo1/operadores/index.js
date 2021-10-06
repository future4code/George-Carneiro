// Exercícios de interpretação de código
// 1)
// const bool1 = true
// const bool2 = false
// const bool3 = !bool2

// let resultado = bool1 && bool2
// console.log("a. ", resultado)

// resultado = bool1 && bool2 && bool3 
// console.log("b. ", resultado) 

// resultado = !resultado && (bool1 || bool2) 
// console.log("c. ", resultado)

// console.log("d. ", typeof resultado)

// true && true 
// resultado TRUE

// true && false && true
// RESULTAO TRUE

// resultado =  !resultado && true
// resultado = true && true
// resultado = TRUE

// typeof resultado
//  d. boleano

// 2) Será escrito a concatenaçao de dois numeros. Já que estão como srings
// temos então que transformar srings em numeros, para realizar a soma!

// 3) Código sugerido seria este:

// let primeiroNumero = prompt("Digite um numero!")
// let segundoNumero = prompt("Digite outro numero!")
// const decimalPrimeiro = Number(primeiroNumero)
// const decimalSegundo = Number(segundoNumero)
// const soma = decimalPrimeiro + decimalSegundo
// console.log(soma)

//Exercício de escrita de código
// 1)

let idadeUsuario = prompt("Qual sua idade?")
let idadeMelhorAmigo = prompt("Qual a idade do seu melhor amigo ou da sua melhor amiga?")

const decimalIdadeUsuario = Number(idadeUsuario)
const decimalIdadeMelhorAmigo = Number(idadeMelhorAmigo)

console.log("Sua idade é maior do que a do seu melhor amigo?", decimalIdadeUsuario > decimalIdadeMelhorAmigo)
console.log("Diferença de idade", decimalIdadeUsuario - decimalIdadeMelhorAmigo)

// 2) o resto dá sempre 0!!!!!!!!!!!111

let numeroPar = prompt("Insira um número par")
const decimalNumeroPar = Number(numeroPar)
const restoDivisao = decimalNumeroPar % 2
console.log(restoDivisao)

// 3)

let idadeUser = prompt("Quantos anos você tem?")
const decimalIdadeUser = Number(idadeUser)

const dias = decimalIdadeUser * 365 
const meses = dias / 30
const horas = dias * 24

console.log("Sua idade em meses:", meses)
console.log("Sua idade em dias:", dias)
console.log("Sua idade em horas:", horas)

// 4)

const numeroUm = prompt("Dê-me o Primeiro Número:")
const numeroDois = prompt("Dê-me o Segundo Número:")
const decimalNumeroUm = Number(numeroUm)
const decimalNumeroDois = Number(numeroDois)
console.log("O primeiro numero é maior que segundo?", decimalNumeroUm > decimalNumeroDois)
console.log("O primeiro numero é igual ao segundo?", decimalNumeroUm === decimalNumeroDois)
console.log("O primeiro numero é divisível pelo segundo?", decimalNumeroUm % decimalNumeroDois === 0)
console.log("O segundo numero é divisível pelo primeiro?", decimalNumeroDois % decimalNumeroUm === 0)
