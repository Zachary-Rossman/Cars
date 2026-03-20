const { DataTypes } = require('sequelize');
const sequelize = require('../config/connections');

const Model = sequelize.define('Model', {
  model_code: {
    type: DataTypes.STRING,
    primaryKey: true,
    allowNull: false,
  },

  manufacturer_code: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },

  years: {
    type: DataTypes.JSON,
    allowNull: false,
  },

  body_styles: {
    type: DataTypes.JSON,
    allowNull: false,
  },
}, {
  tableName: 'models',
  timestamps: false,
});

module.exports = Model;