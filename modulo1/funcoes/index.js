// ----------------AULA FUNÇÕES------------------------

// Exercícios de interpretação de código

// 1)

// a) 10
//    50
// 
// b) Em branco, pois não imprimiria o valor.

// 2)

// a) A função é para saber se o que o usuário digitou possui o elemento 
//    "cenoura". A utilidade prática realmente gostaria de saber rs. 
// 
// b) Retornam todas como true, ja que contem o nome "cenoura".
// 
// --------------- EXERCÍCIO ESCRITA DE CÓDIGO --------------------------
// 
// 1)

// a)

function escreverNome() {
  console.log("Eu sou George, tenho 35 anos, moro em Teresina e sou Estudante")
}
  escreverNome()

// b)

function escreverDados(nome, idade, cidade, profissao) {
  const informacoes = `Eu sou ${nome}, tenho ${idade}, moro em ${cidade} e sou ${profissao}`
  return informacoes
}
  const informacoes = escreverDados("George", "35 anos", "Teresina", "Estudante")
  console.log(informacoes)

// 2)
// a)
function receberDoisNumeros(nA, nB) {
  const somaDuasEntradas = nA + nB
  return somaDuasEntradas
} 
  const resultado = receberDoisNumeros(1, 2)
  console.log("Resultado das duas entradas", resultado)
// 
// b)
function entradaDoisNumeros(numeroA, numeroB) {
  const primeroNumeroMaiorOuIgualSegundo = numeroA >= numeroB 
  return primeroNumeroMaiorOuIgualSegundo
}
  const resultadoMaiorIgual = entradaDoisNumeros(2, 9)
  console.log(resultadoMaiorIgual)
//
// c)
function descobrirNumeroEPar(numA) { 
  const numeroPar = (numA % 2 === 0)
  return numeroPar 
}
  const resultadoFinal = descobrirNumeroEPar (2)
  console.log(resultadoFinal)

// d)
function receberMensagem(mensagemEscrita) {
  console.log("Imprimir Tamanho Mensagem: ", receberMensagem.length)
  console.log(mensagemEscrita.toUpperCase())
  return texto
} 
  const texto("Olá, mundo cruel")
  console.log(receberMensagem)

 
