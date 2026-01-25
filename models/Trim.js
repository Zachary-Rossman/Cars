module.exports = (sequelize, DataTypes) => {
  return sequelize.define('Trim', {
    name: DataTypes.STRING
  });
};
