var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.status(200);
    res.send("Welcome to My App 2");
});

const sequelize = require('../models/index.js');

router.get('/status', async (req, res) => {
  try {
    await sequelize.authenticate();
    res.json({ message: 'Connection has been established successfully.' });
  } catch (error) {
    res.status(500).json({ message: 'Unable to connect to the database.', error });
  }
});


module.exports = router;
