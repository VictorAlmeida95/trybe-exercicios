let numbers = [];
resultado = []
for (let index = 1; index <= 25; index += 1){
   numbers.push(index)
}
for (let index2 = 1; index2 <= numbers.length; index2 += 1){
    resultado.push(index2 / 2)
}

console.log(resultado)