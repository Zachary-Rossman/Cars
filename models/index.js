const Sequelize = require('sequelize');
const sequelize = require('../config/connection');

const models = {
  Manufacturer: require('./Manufacturer')(sequelize, Sequelize.DataTypes),
  Model: require('./Model')(sequelize, Sequelize.DataTypes),
  Car: require('./Car')(sequelize, Sequelize.DataTypes),
  Trim: require('./Trim')(sequelize, Sequelize.DataTypes),
  Engine: require('./Engine')(sequelize, Sequelize.DataTypes),
  Transmission: require('./Transmission')(sequelize, Sequelize.DataTypes),
  Drivetrain: require('./Drivetrain')(sequelize, Sequelize.DataTypes),
  Color: require('./Color')(sequelize, Sequelize.DataTypes),
  Market: require('./Market')(sequelize, Sequelize.DataTypes)
};

require('./associations')(models);

models.sequelize = sequelize;
models.Sequelize = Sequelize;

module.exports = models;
