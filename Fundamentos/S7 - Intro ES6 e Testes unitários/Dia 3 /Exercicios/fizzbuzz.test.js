const myFizzBuzz = require('./fizzbuzz');

// Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado

// Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado

// Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado

// Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado

// Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado

describe('Função remove item', () => {
    it ('divisivel por 5 e por 3', () => {
        expect(myFizzBuzz(15)).toBe('fizzbuzz')
    })
    it ('divisivel apenas por 3', () => {
        expect(myFizzBuzz(9)).toBe('fizz')
    })
    it ('divisivel apenas por 5', () => {
        expect(myFizzBuzz(10)).toBe('buzz')
    })
    it ('retorna o proprio numero', () => {
        expect(myFizzBuzz(7)).toBe(7)
    })
    it ('retorna false', () => {
        expect(myFizzBuzz('a')).toBe(false)
    })
});