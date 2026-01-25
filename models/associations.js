module.exports = (models) => {
  const {
    Manufacturer,
    Model,
    Car,
    Trim
  } = models;

  // Manufacturer → Models
  Manufacturer.hasMany(Model, {
    foreignKey: 'manufacturer_id',
    onDelete: 'CASCADE'
  });

  Model.belongsTo(Manufacturer, {
    foreignKey: 'manufacturer_id'
  });

  // Model → Cars (model years / generations)
  Model.hasMany(Car, {
    foreignKey: 'model_id',
    onDelete: 'CASCADE'
  });

  Car.belongsTo(Model, {
    foreignKey: 'model_id'
  });

  // Car → Trims
  Car.hasMany(Trim, {
    foreignKey: 'car_id',
    onDelete: 'CASCADE'
  });

  Trim.belongsTo(Car, {
    foreignKey: 'car_id'
  });
};
