const { DataTypes } = require('sequelize');
const sequelize = require('../config/connections');

const TrimDrivetrain = sequelize.define('TrimDrivetrain', {
  trim_code: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  drivetrain_code: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  standard: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
}, {
  tableName: 'trim_drivetrains',
  timestamps: false,
});

module.exports = TrimDrivetrain;