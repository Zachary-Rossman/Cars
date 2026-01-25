module.exports = (sequelize, DataTypes) => {
  return sequelize.define('Car', {
    year: DataTypes.INTEGER,
    wheelbase: DataTypes.FLOAT,
    production_country: DataTypes.STRING,
    driver_position: DataTypes.STRING
  });
};
