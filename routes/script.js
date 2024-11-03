const express = require('express');
const router = express.Router();
const itemsController = require('../controllers/itemsController');

router.get('/', (req, res) => {
    res.send('Bem-vindo ao sistema!');
});

router.get('/items', itemsController.getItems);

module.exports = router;
