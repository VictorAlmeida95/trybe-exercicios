const sum = require('./sum');

describe('Função soma', () => {
    it ('4+5 é 9?', () => {
        expect(sum(4,5)).toBe(9)
    })
    it ('0+0 é 0?', () => {
        expect(sum(0,0)).toBe(0)
    })
    it ('erro disparado com string', () => {
        expect( () => sum(4,'5')).toThrow(Error)
    })
    it ('checa mensagem de erro', () => {
        expect( () => sum(4,'5')).toThrow('parameters must be numbers')
    })
});