module.exports = (sequelize, DataTypes) => {
  return sequelize.define('Drivetrain', {
    type: DataTypes.STRING
  });
};
