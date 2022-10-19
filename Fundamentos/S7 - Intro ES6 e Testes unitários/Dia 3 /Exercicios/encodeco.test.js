const { encode, decode } = require('./encodeco');

// Teste se encode e decode são funções;
// Para a função encode, teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente;
// Para a função decode, teste se os números 1, 2, 3, 4 e 5 são convertidos nas vogais a, e, i, o, u, respectivamente;
// Teste se as demais letras/números não são convertidos para cada caso;
// Teste se a string que é retornada pelas funções tem o mesmo número de caracteres que a string passada como parâmetro.

describe('encode,decode', () => {
    it ('encode é uma função?', () => {
        expect(typeof encode).toEqual('function')
    })
    it ('decode é uma função?', () => {
        expect(typeof decode).toEqual('function')
    })
    it ('vogal a é convertida?', () => {
        expect(encode('ara')).toEqual('1r1')
    })
    it ('vogal e é convertida?', () => {
        expect(encode('ere')).toEqual('2r2')
    })
    it ('vogal i é convertida?', () => {
        expect(encode('iri')).toEqual('3r3')
    })
    it ('vogal o é convertida?', () => {
        expect(encode('oro')).toEqual('4r4')
    })
    it ('vogal u é convertida?', () => {
        expect(encode('uru')).toEqual('5r5')
    })
    it ('numero 1 é convertido?', () => {
        expect(decode('1r1')).toEqual('ara')
    })
    it ('numero 2 é convertido?', () => {
        expect(decode('2r2')).toEqual('ere')
    })
    it ('numero 3 é convertido?', () => {
        expect(decode('3r3')).toEqual('iri')
    })
    it ('numero 4 é convertido?', () => {
        expect(decode('4r4')).toEqual('oro')
    })
    it ('numero 5 é convertido?', () => {
        expect(decode('5r5')).toEqual('uru')
    })
    it('checa se o retorno da função tem o mesmo número de caracteres', () => {
        expect(encode('victor').length).toEqual(6);;
    });
    it('checa se o retorno da função tem o mesmo número de caracteres', () => {
        expect(decode('victor').length).toEqual(6);
    });  
});