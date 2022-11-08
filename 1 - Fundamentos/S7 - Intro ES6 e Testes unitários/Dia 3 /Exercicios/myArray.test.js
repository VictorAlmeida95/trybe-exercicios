// Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado

// Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]

// Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado

const remArray = require('./myArray');

describe('Função remove item', () => {
    it ('retorna 3', () => {
        expect(remArray([1, 2, 3, 4], 3)).toEqual([1,2,4])
    })
    it ('não retorna 1,2,3,4', () => {
        expect(remArray([1, 2, 3, 4], 3)).not.toEqual([1,2,3,4])
    })
    it ('não retorna 1,2,3,4', () => {
        expect(remArray([1, 2, 3, 4], 5)).toEqual([1,2,3,4])
    })
});
