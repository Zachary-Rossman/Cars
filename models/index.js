const sequelize = require('../config/connections');

// Models
const Manufacturer = require('./Manufacturer');
const Model = require('./Model');
const Trim = require('./Trim');

const Engine = require('./Engine');
const Transmission = require('./Transmission');
const Drivetrain = require('./Drivetrain');

const TrimEngine = require('./TrimEngine');
const TrimTransmission = require('./TrimTransmission');
const TrimDrivetrain = require('./TrimDrivetrain');

// --------------------
// Associations
// --------------------

// Manufacturer → Models
Manufacturer.hasMany(Model, {
  foreignKey: 'manufacturer_code',
  sourceKey: 'code',
});

Model.belongsTo(Manufacturer, {
  foreignKey: 'manufacturer_code',
  targetKey: 'code',
});

// Model → Trims
Model.hasMany(Trim, {
  foreignKey: 'model_code',
  sourceKey: 'code',
});

Trim.belongsTo(Model, {
  foreignKey: 'model_code',
  targetKey: 'code',
});

// --------------------
// Trim ↔ Engine
// --------------------
Trim.belongsToMany(Engine, {
  through: TrimEngine,
  foreignKey: 'trim_code',
  otherKey: 'engine_code',
});

Engine.belongsToMany(Trim, {
  through: TrimEngine,
  foreignKey: 'engine_code',
  otherKey: 'trim_code',
});

// --------------------
// Trim ↔ Transmission
// --------------------
Trim.belongsToMany(Transmission, {
  through: TrimTransmission,
  foreignKey: 'trim_code',
  otherKey: 'transmission_code',
});

Transmission.belongsToMany(Trim, {
  through: TrimTransmission,
  foreignKey: 'transmission_code',
  otherKey: 'trim_code',
});

// --------------------
// Trim ↔ Drivetrain
// --------------------
Trim.belongsToMany(Drivetrain, {
  through: TrimDrivetrain,
  foreignKey: 'trim_code',
  otherKey: 'drivetrain_code',
});

Drivetrain.belongsToMany(Trim, {
  through: TrimDrivetrain,
  foreignKey: 'drivetrain_code',
  otherKey: 'trim_code',
});

// --------------------
// Export everything
// --------------------
module.exports = {
  sequelize,
  Manufacturer,
  Model,
  Trim,
  Engine,
  Transmission,
  Drivetrain,
  TrimEngine,
  TrimTransmission,
  TrimDrivetrain,
};