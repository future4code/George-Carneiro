// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo(altura, largura) {
  // implemente sua lógica aqui
  const alturaDoTriangulo = prompt('Digite a altura do triângulo: ')
  const larguraDoTriangulo = prompt('Digite a largura do Trinângulo: ')
  const area = (alturaDoTriangulo * larguraDoTriangulo)
  console.log(area)
}

// EXERCÍCIO 02
function imprimeIdade(anoAtual, anoNascimento) {
  // implemente sua lógica aqui
  const ano = prompt('Qual o ano atual? ')
  const nascimento = prompt('Qual seu ano de nascimento? ')
  Number(ano, nascimento)
  const Idade = (ano - nascimento)
  
  console.log(Idade)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  const imc = peso / (altura ** 2)
  return imc
}
  calculaIMC( )

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  const nome = prompt('Qual seu nome? ')
  const idade = prompt('Qual sua idade? ')
  const email = prompt('Qual seu email? ')
  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  const corFavorita1 = prompt('Quais suas três cores favoritas? Primeira cor: ')
  const corFavorita2 = prompt('Seguda cor: ')
  const corFavorita3 = prompt('Terceira cor: ')
  const Arraycores = [corFavorita1, corFavorita2, corFavorita3]
  console.log(Arraycores)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
return string.toUpperCase("Olá, meu nome é George convertendo minúscula para maiúscula.")

}
  console.log(string())

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
return custo / valorIngresso
}
console.log(calculaIngressosEspetaculo)

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui   
return string1.length == string2.length 
}
console.log(checaStringsMesmoTamanho())

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  return array[0]
}
  console.log(retornaPrimeiroElemento)

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  return array[array.length - 1]
}
  console.log(retornaUltimoElemento)

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  return array.push(array.splice(0,1)[0]), array.unshift(array.splice(array.length - 1,1)[1])

}
  console.log(trocaPrimeiroEUltimo() )

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  return string1.toUpperCase() == string2.toUpperCase(), string1.toLowerCase() == string2.toLowerCase()
  
}
  console.log(checaIgualdadeDesconsiderandoCase())

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}