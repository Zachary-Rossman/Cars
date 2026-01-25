module.exports = (sequelize, DataTypes) => {
  return sequelize.define('Model', {
    name: DataTypes.STRING,
    body_style: DataTypes.STRING
  });
};
