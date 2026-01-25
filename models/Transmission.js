module.exports = (sequelize, DataTypes) => {
  return sequelize.define('Transmission', {
    type: DataTypes.STRING,
    gears: DataTypes.INTEGER
  });
};
