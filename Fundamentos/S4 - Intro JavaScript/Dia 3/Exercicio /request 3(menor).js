let array = ['java', 'javascript', 'python', 'html', 'css'];
let menor = [0]
for (let index = 0; index < array.length; index += 1){
    if (array[index].length < menor.length){
        menor = array[index]
    }
};

console.log(menor);