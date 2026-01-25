module.exports = (sequelize, DataTypes) => {
  return sequelize.define('Color', {
    name: DataTypes.STRING
  });
};
