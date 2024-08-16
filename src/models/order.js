const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Order extends Model {
    static associate(models) {
      // Nhiều-nhiều với Product thông qua bảng OrderProduct
      Order.belongsToMany(models.Product, { through: models.OrderProduct, foreignKey: 'order_id', as: 'products' });
      // Liên kết với Customer
      Order.belongsTo(models.Customer, { foreignKey: 'customer_id', as: 'customer' });
      // Một-một với Payment
      Order.hasOne(models.Payment, { foreignKey: 'order_id', as: 'payment' });
    }
  }

  Order.init({
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    customer_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Customers',
        key: 'id'
      }
    },
    total_amount: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    total_products: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    order_date: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Order',
    tableName: 'Orders',
    timestamps: true
  });

  return Order;
};
