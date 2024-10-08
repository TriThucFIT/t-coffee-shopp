const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class OrderProduct extends Model {
    static associate(models) {
      // Liên kết với Order và Product
      OrderProduct.belongsTo(models.Order, { foreignKey: 'order_id', as: 'order' });
      OrderProduct.belongsTo(models.Product, { foreignKey: 'product_id', as: 'product' });
    }
  }

  OrderProduct.init({
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true
    },
    order_id: {
      type: DataTypes.STRING,
      references: {
        model: 'Orders',
        key: 'id'
      }
    },
    product_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Products',
        key: 'id'
      }
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    price: {
      type: DataTypes.DOUBLE,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'OrderProduct',
    tableName: 'OrderProducts',
    timestamps: true
  });

  return OrderProduct;
};
