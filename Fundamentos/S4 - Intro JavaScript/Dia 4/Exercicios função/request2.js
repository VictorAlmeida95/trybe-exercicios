function maior(numeros){
    let resultado = 0
    for (let index in numeros){
        if (numeros[resultado] < numeros[index]) {
            resultado = index
        }
    }
    return resultado
}

console.log(maior([2,3,6,7,10,1]));