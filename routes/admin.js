const path = require('path');

const express = require('express');

const productsControlles = require('../controllers/products');

const router = express.Router();

// /admin/add-product => GET
router.get('/add-product', productsControlles.getAddProduct);

// /admin/add-product => POST
router.post('/add-product', productsControlles.postAddProduct);

module.exports = router;