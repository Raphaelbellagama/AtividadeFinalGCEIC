// src/routes/infsRoutes.js
const express = require('express');
const router = express.Router();
const { calculateTax, calculateTax2 } = require('../controllers/infsController');

router.post('/', calculateTax);
router.post('/2', calculateTax2);

module.exports = router;
