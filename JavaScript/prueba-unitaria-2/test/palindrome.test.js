//importar

const { SummaryReporter } = require('@jest/reporters');
const {palindrome} = require('../ppruebas');

// primer test unitario
test('palindrome de generation', () => {

    const resultado = palindrome('generation');
   
    // comparar
    expect(resultado).toBe('noitareneg');
});

test('palindrome usando un string vacio', () => {

    const resultado = palindrome('');
   
    // comparar
    expect(resultado).toBe('');
});

test('palindrome usando undefined', () => {

    const resultado = palindrome();
   
    // comparar
    expect(resultado).toBe();
});