const longestWord = (text) => {
    const divide = text.split(' ');
    let maxLength = 0;
    let result = '';
  
    for (const word of divide) {
        if (word.length > maxLength) {
            maxLength = word.length;
            result = word;
        }
    }
    return result;
}
  
console.log(longestWord('Antonio foi ao banheiro e não sabemos o que aconteceu'));