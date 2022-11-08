//Programa para descobrir qual é o maior número!
//Troque os 0 nas constantes A,B e C :)

const a = 0
const b = 0
const c = 0
let resultado =''

if (a > b && a > c){
    resultado = a + ' ' + 'é o maior número!'
}
else if (b > a && b > c){
    resultado = b + ' ' + 'é o maior número!'
}
else if (c > a && c > b){
    resultado = c + ' ' + 'é o maior número!'
}

console.log(resultado)