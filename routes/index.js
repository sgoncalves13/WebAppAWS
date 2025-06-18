var express = require('express');
var router = express.Router();
const sequelize = require('../models/index.js');
const UserModel = require('../models/User.js');
const User = UserModel(sequelize);

/* GET home page. */
router.get('/', function(req, res, next) {
    res.status(200);
    res.send("Welcome to My App 2");
});


router.get('/status', async (req, res) => {
  try {
    await sequelize.authenticate();
    res.json({ message: 'Connection has been established successfully.' });
  } catch (error) {
    res.status(500).json({ message: 'Unable to connect to the database.', error });
  }
});

// GET /users
router.get('/users', async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ message: 'Error fetching users', error });
  }
});



module.exports = router;
