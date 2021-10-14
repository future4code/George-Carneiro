//****************Exercícios de interpretação de código******************
//1)
// a) Descobre se o resto da operação de um numero dividido por dois é 
//    igual a zero. Se o resto da divisão for igual a zero ele exibi a 
//    mensagem "Passou no teste" se não exibe a mensagem "Não passou no
//    teste" 
// 
// b) Para números pares.
// c) Para números ímpares.

//2) a) Mostrar o preço de produtos, neste caso frutas.
//   b) 2.25
//   c) Pula para o próximo preço que é default igual a 5!

// const numero = Number(prompt("Digite o primeiro número."))

// if(numero > 0) {
//   console.log("Esse número passou no teste")
// 	let mensagem = "Essa mensagem é secreta!!!"
// }

// console.log(mensagem)

//3) a) É solicitado um número(De tipo number) ao usuário.
//   b) Se o número for 10 será exibido a mensagem "Esse número passou no 
//   teste", se fosse -10 seria exibido "mensagem is not defined"
//   c) Sim, será "mensagem is no defined". Porque a variavel mensagem
//    está dentro da função e o console.log não consegue acessar.
// 
// ****************Exercícios de escrita de código************************
 
// 1) 

const idadeUsuario = Number(prompt("Qual sua idade?"))

if (idadeUsuario>=18){
console.log("Você pode dirigir")
} else { 
console.log("Você não pode dirigir")
} 

// 2)
const verificarTurno = prompt("Digite o turno que você estuda. Digite 'M' para Matutino, 'V' para Vespertino ou 'N' para Noturno").toUpperCase()

if(verificarTurno === 'M') {
  console.log("Bom Dia!")
} else if(verificarTurno === 'V') {
  console.log("Boa Tarde!")
} else if(verificarTurno === 'N') { 
  console.log("Boa Noite!")
} else {
  console.log("Turno não encontrado, digite M, V ou N para seu turno")
}

// 3)

const verificarTurno = prompt("Digite o turno que você estuda. Digite 'M' para Matutino, 'V' para Vespertino ou 'N' para Noturno").toUpperCase()
switch (verificarTurno) {
    case 'M':
      console.log('Bom dia') 
      break
    case 'V':
      console.log('Boa Tarde')
      break
    case 'M':
      console.log('Boa Noite')
      break
    default:
      console.log('Turno não encontrado, digite M, V ou N para achar seu turno')
}

// 4) 


const generoFilme = prompt('Qual gênero de filme vão assistir: ').toLowerCase()
const precoIngresso = Number(prompt('Qual o preço do ingresso: '))

if (generoFilme === 'fantasia' && precoIngresso < 15) {
    console.log('Bom Filme')
} else {
    console.log('Escolha outro filme :( ')
}

// **************************DESAFIO***********************************

// 1)

const generoFilme = prompt('Qual gênero de filme vão assistir: ').toLowerCase()
const precoIngresso = Number(prompt('Qual o preço do ingresso: '))

if (generoFilme === 'fantasia' && precoIngresso < 15) {
    const lanchinho = prompt('Qual lanchinho vai comprar?')
    console.log(`Bom Filme, aproveite seu ${lanchinho}`)
} else {
    console.log('Escolha outro filme :( ')
}



