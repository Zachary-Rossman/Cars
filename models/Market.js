module.exports = (sequelize, DataTypes) => {
  return sequelize.define('Market', {
    region: DataTypes.STRING
  });
};
