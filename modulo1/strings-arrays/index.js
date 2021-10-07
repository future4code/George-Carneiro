// Exercícios de interpretação de código
// 1)

/* let array
console.log('a. ', array)
a. undefined

array = null
console.log('b. ', array)
b. null

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length)
c. 11

let i = 0
console.log('d. ', array[i])
d. 0

array[i+1] = 19
console.log('e. ', array)
e. Não sei

const valor = array[i+6]
console.log**('f. ', valor)**
f. Error.
 */

// 2)
// SUBI     NUM ÔNIBUS EM MIRROCOS, 27  

// -------------------------------------------------

// Exercícios de escrita de código
// 1)


const nomeDoUsuario = prompt("Qual seu nome?")
const emailDoUsuario = prompt("Qual seu email?")
console.log(`O email`, emailDoUsuario, `foi cadastrado com sucesso. Seja bem-vinda(o)`, nomeDoUsuario)

// 2)

const comidasPreferidas = ["Salada", "Pizza", "Purê de Batata", "Waffle", "Coxinha Vegana"]

// // a) 
console.log(comidasPreferidas)

// // b)
console.log("Essas são as minhas comidas preferidas: ")
console.log(comidasPreferidas[0])
console.log(comidasPreferidas[1])
console.log(comidasPreferidas[2])
console.log(comidasPreferidas[3])
console.log(comidasPreferidas[4])

// // c)

const comidasPreferidasUsuario = prompt("Qual sua comida preferida?")
comidasPreferidas.splice(1,1,comidasPreferidasUsuario)

console.log("Essas são as comidas preferidas pelo usuário: ")
console.log(comidasPreferidas[0])
console.log(comidasPreferidas[1])
console.log(comidasPreferidas[2])
console.log(comidasPreferidas[3])
console.log(comidasPreferidas[4])

// 3)
//a.
const listaDeTarefas = []

//b.

const tarefaUm = prompt("Quais as três tarefas que você precisa realizar no seu dia? Tarefa 1: ") 
const tarefaDois = prompt("Tarefa 2: ")
const tarefaTres = prompt("Tarefa 3: ")

listaDeTarefas.push(tarefaUm)
listaDeTarefas.push(tarefaDois)
listaDeTarefas.push(tarefaTres)

// c.
console.log(listaDeTarefas)

// d.

const indiceTarefaRealizada = prompt("Digite o índice de uma tarefa que você já realizou: 0, 1 ou 2: ")

// e.

listaDeTarefas.splice(indiceTarefaRealizada, 1 )

// f.

console.log(listaDeTarefas)



