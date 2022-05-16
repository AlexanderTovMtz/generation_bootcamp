const { default: TestRunner } = require('jest-runner');
const { describe } = require('yargs');
const {average} = require('../ppruebas');

describe('average', () => {
    TestRunner('ingresar un valor', () => {
        const resultado = average ([1]);
        
        expect(resultado).tobe(1);
    })
})

test('palindrome usando undefined', () => {

    const resultado = palindrome();
   
    // comparar
    expect(resultado).toBeundefined();
});

