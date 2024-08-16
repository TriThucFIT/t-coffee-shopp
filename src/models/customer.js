const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Customer extends Model {
    static associate(models) {
      // Một-nhiều với Order
      Customer.hasMany(models.Order, { foreignKey: 'customer_id', as: 'orders' });
    }
  }

  Customer.init({
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.STRING,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    phone_number: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    address: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Customer',
    tableName: 'Customers',
    timestamps: true
  });

  return Customer;
};
