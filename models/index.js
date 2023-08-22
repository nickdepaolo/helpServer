const sequelize = require ('sequelize');

const UserModel = require('./user');
const HelpRequestModel = require('./helpRequest');
const ArchiveModel = require('./archive')

module.exports = {
    UserModel, 
    HelpRequestModel,
    ArchiveModel
};
