const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connections');

class Country extends Model {}

Country.init(
  {
    code: {
      type: DataTypes.STRING(2),
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    region: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'country',
    tableName: 'countries',
    timestamps: false,
    underscored: true,
  }
);

module.exports = Country;