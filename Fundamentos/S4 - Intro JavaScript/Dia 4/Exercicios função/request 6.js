function natural(numero){
    let resultado = 0
    for (let index = 1; index <= numero; index += 1){
        resultado = resultado + index
    }
    return resultado
}
console.log(natural([5]));