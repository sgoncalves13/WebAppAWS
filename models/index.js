const Sequelize = require('sequelize');
const config = require('../config/config.js')['development'];
console.log(process.env.DB_USER, process.env.DB_PASSWORD);
console.log(config.username, config.password);

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'postgres'
  }
);

sequelize.authenticate()
  .then(() => console.log('✅ Connected!'))
  .catch((error) => console.error('❌ Connection failed:', error));

module.exports = sequelize;