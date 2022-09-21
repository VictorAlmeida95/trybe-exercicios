//Programa para converter notas de porcentagem para conceitos A à F.
//Troque os 0 nas constantes A,B e C :)

const a = 50
let resultado =''

if (a < 0 || a > 100){
    resultado = 'Erro!'
}
if (a >= 90){
    resultado = 'Nota A'
}
else if (a >= 80){
    resultado = 'Nota B'
}
else if (a >= 70){
    resultado = 'Nota C'
}
else if (a >= 60){
    resultado = 'Nota D'
}
else if (a >= 50){
    resultado = 'Nota E'
}
else{
    resultado = 'Nota F'
}

console.log(resultado)