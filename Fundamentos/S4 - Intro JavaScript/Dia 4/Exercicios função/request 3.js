function menor(numeros){
    let resultado = 0
    for (let index in numeros){
        if (numeros[resultado] > numeros[index]) {
            resultado = index
        }
    }
    return resultado
}

console.log(menor([2,4,6,7,10,0,-3]));