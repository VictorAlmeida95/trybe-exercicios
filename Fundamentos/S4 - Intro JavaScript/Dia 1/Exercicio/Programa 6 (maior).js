//Programa para descobrir qual é o maior número!
//Troque os 0 nas constantes A e B :)

const a = 0
const b = 0
let resultado =''

if (a > b){
    resultado = a + ' ' + 'é maior que ' + b
}
else if (b > a){
    resultado = b + ' ' + 'é maior que ' + a
}
else{
    resultado = 'Os números são iguais'
}

console.log(resultado)