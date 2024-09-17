let nome = prompt("Informe o seu nome")
let sobrenome = prompt("Informe o seu sobrenome")
let idade = prompt("Informe sua idade")
let idadeParseada = parseInt(idade)

let anoNascimento = 2024 - idadeParseada

alert("Olá " + nome + " " + sobrenome + "!, Olhe o console.log para verificar o ano de seu nascimento.")
console.log("Ano em que nasceu é: " + anoNascimento + ".")
