const express = require('express');
const router = express.Router();
const database = require('../models/database')

router.get('/test', (req, res) => {
    res.json(database.tb_clients);
});

module.exports = router;