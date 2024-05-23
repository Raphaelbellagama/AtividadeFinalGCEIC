const {calcularArea} = require('../public/javascripts/exemplo');

describe('Teste exemplo 1', () => {

    test('Funcao calcularArea', ()=>{
        expect(calcularArea(2,3)).toBe(6);
    })

})
