function inteiros(numeros){
    let contador = 0
    let repetido = 0
    let qualNum = 0
    for (let index in numeros){
        let verificador = numeros[index]
        for  (let index2 in numeros){
            if (verificador === numeros[index2]){
                contador += 1;
            }
        }
        if (contador > repetido){
            repetido = contador
            qualNum = index
        }
    }
    return numeros[qualNum]
}

console.log(inteiros([2, 3, 2, 5, 8, 2, 3]));