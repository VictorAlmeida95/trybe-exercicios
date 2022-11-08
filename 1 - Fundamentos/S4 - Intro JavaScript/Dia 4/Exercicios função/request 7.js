function strings(word,ending){
    word = word.split('')
    ending = ending.split('')
    let verificador = true
    for(let index = 0; index < ending.length; index += 1){
        if (word[word - ending + index] != ending[index]){
            verificador = false
            break;
        }
        else {
            verificador = true
        }
    }
    return verificador
}

console.log(strings('trybe','be'));
console.log(strings('joaofernando', 'fernan'));