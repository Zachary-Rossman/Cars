const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connections');

class InteriorColor extends Model {}

InteriorColor.init(
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

    interior_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    material: {
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
    modelName: 'interior_color',
    tableName: 'interior_colors',
    timestamps: false,
    underscored: true,
  }
);

module.exports = InteriorColor;