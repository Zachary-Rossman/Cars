const { DataTypes } = require('sequelize');
const sequelize = require('../config/connections');

const TrimInteriorColor = sequelize.define('TrimInteriorColor', {
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
  tableName: 'trim_interior_colors',
  timestamps: false,
});

module.exports = TrimInteriorColor;