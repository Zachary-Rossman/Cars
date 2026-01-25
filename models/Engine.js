module.exports = (sequelize, DataTypes) => {
  return sequelize.define('Engine', {
    code: DataTypes.STRING,
    displacement: DataTypes.STRING,
    cylinders: DataTypes.INTEGER,
    fuel_type: DataTypes.STRING
  });
};
