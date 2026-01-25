module.exports = (sequelize, DataTypes) => {
  return sequelize.define('Manufacturer', {
    name: DataTypes.STRING,
    country: DataTypes.STRING
  });
};
