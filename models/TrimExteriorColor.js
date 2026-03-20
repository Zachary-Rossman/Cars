const { DataTypes } = require('sequelize');
const sequelize = require('../config/connections');

const TrimExteriorColor = sequelize.define('TrimExteriorColor', {
  trim_code: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  color_code: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  standard: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
}, {
  tableName: 'trim_exterior_colors',
  timestamps: false,
});

module.exports = TrimExteriorColor;