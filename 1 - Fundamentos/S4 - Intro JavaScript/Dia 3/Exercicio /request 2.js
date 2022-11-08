let palavra = 'Trybe'
let contrario = ''
for (let index = 0; index < palavra.length ; index += 1){
    contrario += palavra[palavra.length - 1 - index]
}

console.log(contrario)