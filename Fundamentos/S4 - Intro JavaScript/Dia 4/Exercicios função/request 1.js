function palindromo (palavra){
    const ultimaPosicao = palavra.length - 1;
   for (let index = 0; index < palavra.length; index = index + 1){
       if (palavra[index] !== palavra[ultimaPosicao - index]){
           return 'false'
       }
   }
   return 'true'
 }
 console.log(palindromo('trybe'))