const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connections');

class ExteriorColor extends Model {}

ExteriorColor.init(
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

    color_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    finish: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
  },
  {
    sequelize,
    modelName: 'exterior_color',
    tableName: 'exterior_colors',
    timestamps: false,
    underscored: true,
  }
);

module.exports = ExteriorColor;