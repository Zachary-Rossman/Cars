const { DataTypes } = require('sequelize');
const sequelize = require('../config/connections');

const TrimEngine = sequelize.define('TrimEngine', {
  trim_code: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  engine_code: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  standard: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
}, {
  tableName: 'trim_engines',
  timestamps: false,
});

module.exports = TrimEngine;