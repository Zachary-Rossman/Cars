const { DataTypes } = require('sequelize');
const sequelize = require('../config/connections');

const TrimTransmission = sequelize.define('TrimTransmission', {
  trim_code: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  transmission_code: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  standard: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
}, {
  tableName: 'trim_transmissions',
  timestamps: false,
});

module.exports = TrimTransmission;