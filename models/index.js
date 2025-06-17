const Sequelize = require('sequelize');
const config = require('../config/config.js')['development'];
console.log(process.env.DB_USER, process.env.DB_PASSWORD);
console.log(config.username, config.password);

const sequelize = new Sequelize(config.database, config.username, config.password, config);

module.exports = sequelize;