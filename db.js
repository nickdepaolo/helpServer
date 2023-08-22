const Sequelize = require('sequelize');

const sequelize = new Sequelize("postgres://nick:nicknick@localhost:5432/helpserver");

module.exports = sequelize;