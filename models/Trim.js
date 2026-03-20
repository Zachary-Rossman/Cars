const { DataTypes } = require('sequelize');
const sequelize = require('../config/connections');

const Trim = sequelize.define('Trim', {
  code: {
    type: DataTypes.STRING,
    primaryKey: true,
    allowNull: false,
  },

  model_code: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  manufacturer_code: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },

  trim_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  standard_features: {
    type: DataTypes.JSON,
    allowNull: false,
  },

  optional_features: {
    type: DataTypes.JSON,
    allowNull: false,
  },

  active: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
}, {
  tableName: 'trims',
  timestamps: false,
});

module.exports = Trim;