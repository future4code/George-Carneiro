// ****************Exercícios de interpretação de código****************
// ************************ LAÇOS *************************************

// 1) Soma de todos os números menores que 5

// 2) a) 18, 19, 21, 23, 25, 27, 30

//    b) 

const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (const [index, elemento] of lista.entries()) {
  console.log(`${index}. ${elemento}`)
}

// 3)
// *
// **
// ***
// ****

// ****************Exercícios de escrita de código **********************
// 1)

// se 0 mostrar proxima

// se >0 pedir que digite os nomes e guardar array
const pets = []
const pets = Number(prompt('Quantos bichinhos de estimação você tem?'))

if (pets === 0) {
  console.log('Que pena! Você pode adotar um pet!') 
} else if(pets > 0) {
  prompt('Digite o nome deles: ')
} console.log