/**
 * * Tipagem dinâmica
 * * Constantes e variáveis
 */
console.clear()
console.log("String___________________")
let nome = 'Daniel Santos da Silva'
console.log(nome)
console.log(typeof(nome))
nome = 'Lucas'
console.log(nome)
console.log(nome.replace("Zé","Zézinho"))
//concatenação
console.log("Professor: " + nome)
console.log('Aluno: ${nome}')

console.log("Numbers_______________________")
let peso = 62
let altura = 1.65
console.log(typeof(peso))
console.log(typeof(altura))
console.log(Number.isInteger(peso))
console.log(Number.isInteger(altura))
let imc = peso / (altura * altura)
console.log('IMC: ${imc.toFixed(2)}')
console.log("BOOLEANS______________________")
let sw = true
console.log(typeof(sw))
console.log(`Chave: ${sw}`)

// ATENÇÂO !!!
console.log(10/0)
console.log("3" +2)
console.log("3" -2)
console.log("3" *2)
console.log("3" /2)
console.log("3x" -2)
console.log(0.5 +0.5)
console.log(0.1 +0.2)