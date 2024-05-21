// tests/calculate.test.js
const calculateVolume = require('../src/calculate');

test('calculates volume of a cylinder', () => {
    const volume = calculateVolume('cylinder', 5, 10);
    expect(volume).toBeCloseTo(785.398);
});

test('calculates volume of a cone', () => {
    const volume = calculateVolume('cone', 5, 10);
    expect(volume).toBeCloseTo(261.799);
});

test('throws error for invalid shape', () => {
    expect(() => {
        calculateVolume('invalid', 5, 10);
    }).toThrow('Invalid shape');
});
