// src/controllers/infsController.js
const calculateTax = (req, res) => {
    const { amount } = req.body;
    const tax = amount * 0.1; // Exemplo de cálculo de imposto de 10%
    res.json({ amount, tax, total: amount + tax });
};

const calculateTax2 = (req, res) => {
    const { amount } = req.body;
    const tax = amount * 0.15; // Exemplo de cálculo de imposto de 15%
    res.json({ amount, tax, total: amount + tax });
};

module.exports = { calculateTax, calculateTax2 };