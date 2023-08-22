const { DataTypes } =  require('sequelize');
const db = require('../db');

const HelpRequest = db.define('helprequest', {
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

module.exports = HelpRequest;