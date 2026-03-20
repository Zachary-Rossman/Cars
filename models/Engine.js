const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connections');

class Engine extends Model {}

Engine.init(
  {
    code: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },

    manufacturer_code: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    engine_type: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    fuel_type: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    displacement_liters: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },

    cylinders: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },

    induction_type: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    power_hp: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    torque_lbft: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },

    is_electric: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },

    motor_count: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },

    battery_kwh: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },

    active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
  },
  {
    sequelize,
    modelName: 'engine',
    tableName: 'engines',
    timestamps: false,
    underscored: true,
  }
);

module.exports = Engine;