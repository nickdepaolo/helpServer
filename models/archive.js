const { DataTypes } =  require('sequelize');
const db = require('../db');

const Archive = db.define('archive', {
    clientName: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    issue: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    room: {
        type: DataTypes.STRING,
        allowNull: true,
    },
});

module.exports = Archive;