let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let resultado = 0
for (let index = 0; index < numbers.length; index += 1){
    for (let index1 = 0; index < numbers.length; index += 1){
        if (numbers[index] > numbers[index1]){
            resultado = numbers[index]
            numbers[index1] = resultado
        }
    }
}

console.log(resultado)