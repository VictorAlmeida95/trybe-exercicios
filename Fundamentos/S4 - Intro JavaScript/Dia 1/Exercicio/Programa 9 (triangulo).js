//Programa para descobrir se os angulos representam os de um triangulo
//Troque os 0 nas constantes A,B e C :)

const a = 20
const b = 80
const c = 80
let soma = a + b + c;
let valida = a > 0 && b > 0 && c > 0
let resultado ='?'

if (valida){
    if (soma === 180){
        resultado = 'true'
    }
    else{
        resultado = 'false'
    }
}
else{ 
    resultado = 'erro'
}

console.log(resultado)